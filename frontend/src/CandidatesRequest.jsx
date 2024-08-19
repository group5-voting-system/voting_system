import React, { useState } from "react";
import axios from "axios";

function LocalListForm() {
  const [listName, setListName] = useState("");
  const [circleId, setCircleId] = useState("");
  const [candidates, setCandidates] = useState([
    { nationalId: "", typeOfChair: "" },
  ]);

  const handleAddCandidate = () => {
    setCandidates([...candidates, { nationalId: "", typeOfChair: "" }]);
  };

  const handleCandidateChange = (index, field, value) => {
    const newCandidates = [...candidates];
    newCandidates[index][field] = value;
    setCandidates(newCandidates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/local-lists",
        {
          listName,
          circleId,
          candidates,
        }
      );
      console.log("List created:", response.data);
      // Reset form or show success message
    } catch (error) {
      console.error("Error creating list:", error);
      // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-blue-900 to-green-900 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl">
        <div className="px-6 py-8 sm:p-10">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Create Local List
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="relative group">
                <input
                  type="text"
                  id="listName"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                  className="w-full bg-transparent text-white border-b-2 border-green-400 py-2 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="listName"
                  className="absolute top-2 left-0 text-green-400 text-opacity-80 group-focus-within:text-blue-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-xs"
                >
                  List Name
                </label>
              </div>
              <div className="relative group">
                <input
                  type="number"
                  id="circleId"
                  value={circleId}
                  onChange={(e) => setCircleId(e.target.value)}
                  className="w-full bg-transparent text-white border-b-2 border-green-400 py-2 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="circleId"
                  className="absolute top-2 left-0 text-green-400 text-opacity-80 group-focus-within:text-blue-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-xs"
                >
                  Circle ID
                </label>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-white mb-4">Candidates</h3>
              <div className="space-y-6">
                {candidates.map((candidate, index) => (
                  <div key={index} className="p-6 bg-blue-900 bg-opacity-20 rounded-xl backdrop-filter backdrop-blur-sm relative">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div className="relative group">
                        <input
                          type="text"
                          id={`nationalId-${index}`}
                          value={candidate.nationalId}
                          onChange={(e) =>
                            handleCandidateChange(index, "nationalId", e.target.value)
                          }
                          className="w-full bg-transparent text-white border-b-2 border-green-400 py-2 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor={`nationalId-${index}`}
                          className="absolute top-2 left-0 text-green-400 text-opacity-80 group-focus-within:text-blue-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-xs"
                        >
                          National ID
                        </label>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          id={`typeOfChair-${index}`}
                          value={candidate.typeOfChair}
                          onChange={(e) =>
                            handleCandidateChange(index, "typeOfChair", e.target.value)
                          }
                          className="w-full bg-transparent text-white border-b-2 border-green-400 py-2 focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor={`typeOfChair-${index}`}
                          className="absolute top-2 left-0 text-green-400 text-opacity-80 group-focus-within:text-blue-400 transition-all duration-300 transform group-focus-within:-translate-y-6 group-focus-within:text-xs"
                        >
                          Type of Chair
                        </label>
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveCandidate(index)}
                        className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>













  );
}

export default LocalListForm;
