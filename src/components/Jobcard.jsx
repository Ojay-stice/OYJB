import React from 'react'

const Jobcard = ({ job }) => {
  return (
    <div className="w-full my-2 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">
        {job.title}
      </h2>

      {/* Company & Location */}
      <p className="text-sm text-gray-600 mt-1">
        {job.company} • {job.location}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
          {job.type}
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
          {job.experienceLevel}
        </span>
        {job.remote && (
          <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
            Remote
          </span>
        )}
      </div>

      {/* Salary */}
      <p className="mt-4 text-sm text-gray-800">
        💰 ${job.salary.toLocaleString()} / year
      </p>

      {/* Posted Date */}
      <p className="mt-1 text-xs text-gray-400">
        Posted on {new Date(job.postedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Jobcard