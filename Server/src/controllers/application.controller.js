import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Application } from "../models/application.model.js";

const createApplication = asyncHandler(async (req, res) => {
  const {
    jobposition,
    company,
    location,
    description,
    applicationlink,
    salary,
  } = req.body;

  const userId = req.user._id;
  if ([jobposition, company].some((field) => field?.trim() == "")) {
    throw new ApiError(401, "Please enter the required information");
  }

  const jobExisted = await Application.findOne({
    $and: [{ jobposition }, { company }],
  });

  if (jobExisted) {
    throw new ApiError(400, "Comapany and JobPosition already added");
  }

  // console.log(jobposition);
  const application = await Application.create({
    userId,
    jobposition,
    company,
    location,
    description,
    applicationlink,
    salary,
  });

  const createdApplication = await Application.findById(application._id);

  if (!createdApplication) {
    throw new ApiError(500, "Something went wrong in creating the application");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, createdApplication, "Application added Successfully")
    );
});

const updateApplication = asyncHandler(async (req, res) => {
  const { jobposition, company, description, salary, location, _id } = req.body;
  if (!jobposition || !company) {
    throw new ApiError(400, "Please enter Jobpostion and Company");
  }
  // console.log(_id);
  const application = await Application.findByIdAndUpdate(
    _id,
    {
      $set: {
        jobposition,
        company,
        description,
        salary,
        location,
      },
    },
    {
      new: true,
    }
  );

  // console.log(application);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        application,
        "Application Details Updated successfully"
      )
    );
});

const removeApplication = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  const deleteApplication = await Application.findByIdAndDelete(_id);
  // console.log(deleteApplication);
  if (!deleteApplication) {
    throw new ApiError(400, "Application not deleted");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        deleteApplication,
        "Application deleted successfully"
      )
    );
});

const readApplication = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  const readApplication = await Application.findById(_id);
  if (!readApplication) {
    throw new ApiError(400, "Cannot fetch the Application");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        readApplication,
        "Application details fetchef Successfully"
      )
    );
});

const getAllAplication = asyncHandler(async (req, res) => {
  const applications = await Application.find({
    userId: req.user._id,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, applications, "All the application are fetched")
    );
});

export {
  createApplication,
  updateApplication,
  removeApplication,
  readApplication,
  getAllAplication,
};
