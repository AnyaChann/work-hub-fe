import axiosClient from './axiosClient';

// Lấy danh sách công việc
export const getJobs = () => {
  return axiosClient.get('/jobs');
};

// Lấy chi tiết công việc
export const getJobDetails = (jobId) => {
  return axiosClient.get(`/jobs/${jobId}`);
};