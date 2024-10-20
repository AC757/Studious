const Section = require("../models/Section")
const SubSection = require("../models/SubSection");
const { uploadFileToCloudinary } = require("../utils/imageUploader");

// create SubSection
exports.createSubSection = async (req, res) => {
  try {
      // Fetch data from Req body
      const { sectionId, title, description } = req.body;
      const video = req.files.video;
      const pdf = req.files.pdf; // Extract the PDF file

      // Validation
      if (!sectionId || !title || !description || (!video && !pdf)) {
          return res.status(404).json({
              success: false,
              message: 'All fields are required, and at least one file must be uploaded (video or pdf).'
          });
      }

      // Variable to hold URLs
      let videoUrl, pdfUrl, timeDuration;

      // Upload video to Cloudinary if it exists
      if (video) {
          const uploadDetails = await uploadFileToCloudinary(video, process.env.FOLDER_NAME);
          videoUrl = uploadDetails.secure_url;
          timeDuration = `${uploadDetails.duration}`;
      }

      // Upload PDF to Cloudinary if it exists
      if (pdf) {
          const uploadDetails = await uploadFileToCloudinary(pdf, process.env.FOLDER_NAME); // Ensure your upload function can handle PDFs
          pdfUrl = uploadDetails.secure_url; // Adjust as needed if you have a different upload function for PDFs
      }

      // Create a new sub-section
      const SubSectionDetails = await SubSection.create({
          title: title,
          timeDuration: timeDuration || null, // Only set if video exists
          description: description,
          videoUrl: videoUrl || null, // Only set if video exists
          pdfUrl: pdfUrl || null // Set PDF URL if exists
      });

      // Update section with this sub-section ObjectId
      const updatedSection = await Section.findByIdAndUpdate(
          { _id: sectionId },
          { $push: { subSection: SubSectionDetails._id } },
          { new: true }
      ).populate("subSection");

      // Return response
      return res.status(200).json({
          success: true,
          message: "Sub Section created Successfully",
          data: updatedSection
      });
  } catch (error) {
      // Handle any errors that may occur during the process
      console.error("Error creating new sub-section:", error);
      return res.status(500).json({
          success: false,
          message: "Internal Server Error",
          error: error.message
      });
  }
}

exports.updateSubSection = async (req, res) => {
    try {
      const { sectionId, subSectionId, title, description } = req.body
      const subSection = await SubSection.findById(subSectionId)
  
      if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
  
      if (title !== undefined) {
        subSection.title = title
      }
  
      if (description !== undefined) {
        subSection.description = description
      }
      if (req.files && req.files.video !== undefined) {
        const video = req.files.video
        const uploadDetails = await uploadFileToCloudinary(
          video,
          process.env.FOLDER_NAME
        )
        subSection.videoUrl = uploadDetails.secure_url
        subSection.timeDuration = `${uploadDetails.duration}`
      }
  
      await subSection.save()
  
      // find updated section and return it
      const updatedSection = await Section.findById(sectionId).populate(
        "subSection"
      )
  
      console.log("updated section", updatedSection)
  
      return res.json({
        success: true,
        message: "Section updated successfully",
        data: updatedSection,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
    }
  }


exports.deleteSubSection = async (req, res) => {
    try {
      const { subSectionId, sectionId } = req.body
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $pull: {
            subSection: subSectionId,
          },
        }
      )
      const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if (!subSection) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }
  
      // find updated section and return it
      const updatedSection = await Section.findById(sectionId).populate("subSection")

      return res.json({
        success: true,
        message: "SubSection deleted successfully",
        data: updatedSection,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
}