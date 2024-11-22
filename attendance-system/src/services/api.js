// services/api.js

const API_BASE_URL = 'https://example.com/api'; // Replace with your backend URL

export const fetchAttendance = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/attendance`);
    if (!response.ok) {
      throw new Error('Failed to fetch attendance data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const markAttendance = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to mark attendance');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
