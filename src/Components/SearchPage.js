
// SearchPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Dummy.css'

const dummyStudents = [
  { id: 1, name: 'John Doe', student_number: 'S12345', nationality: 'US', gender: 'Male' },
  { id: 2, name: 'Jane Doe', student_number: 'S67890', nationality: 'UK', gender: 'Female' },
  { id: 3, name: 'King Andy', student_number: 'S567892', nationality: 'UG', gender: 'Male' },
  { id: 4, name: 'Jane Ruth', student_number: 'S347856', nationality: 'KE', gender: 'Female' },
  { id: 5, name: 'Alex Max', student_number: 'S210071', nationality: 'TZ', gender: 'Male' },
  { id: 6, name: 'Bruno Brian', student_number: 'S127845', nationality: 'RW', gender: 'Male' },
  // Add more dummy data as needed
];

function SearchPage() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('name') || '';
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const filtered = dummyStudents.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results</h1>
      {filteredStudents.length === 0 ? (
        <p>No student registered with the name "{searchQuery}"</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Student Number</th>
              <th>Nationality</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.student_number}</td>
                <td>{student.nationality}</td>
                <td>{student.gender}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchPage;
