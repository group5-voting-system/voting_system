import React, { useState } from 'react';
import axios from 'axios';

function DebateForm() {
  const [formData, setFormData] = useState({
    DATE_OF_DEBATE: '',
    TOPIC: '',
    FIRST_CANDIDATE: '',
    FIRST_CANDIDATE_LIST: '',
    SECOND_CANDIDATE: '',
    SECOND_CANDIDATE_LIST: '',
    STATUS: '',
    ZOOM_LINK: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/debates', formData);
      
      console.log('تمت إضافة المناظرة بنجاح:', response.data);
      // Reset form or show success message
    } catch (error) {
      console.error('خطأ في إضافة المناظرة:', error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ direction: 'rtl' }}>
      <div>
        <label htmlFor="DATE_OF_DEBATE">تاريخ المناظرة:</label>
        <input
          type="date"
          id="DATE_OF_DEBATE"
          name="DATE_OF_DEBATE"
          value={formData.DATE_OF_DEBATE}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="TOPIC">الموضوع:</label>
        <input
          type="text"
          id="TOPIC"
          name="TOPIC"
          value={formData.TOPIC}
          onChange={handleChange}
          placeholder="أدخل موضوع المناظرة"
          required
        />
      </div>
      <div>
        <label htmlFor="FIRST_CANDIDATE">المرشح الأول:</label>
        <input
          type="text"
          id="FIRST_CANDIDATE"
          name="FIRST_CANDIDATE"
          value={formData.FIRST_CANDIDATE}
          onChange={handleChange}
          placeholder="أدخل اسم المرشح الأول"
          required
        />
      </div>
      <div>
        <label htmlFor="FIRST_CANDIDATE_LIST">قائمة المرشح الأول:</label>
        <input
          type="text"
          id="FIRST_CANDIDATE_LIST"
          name="FIRST_CANDIDATE_LIST"
          value={formData.FIRST_CANDIDATE_LIST}
          onChange={handleChange}
          placeholder="أدخل قائمة المرشح الأول"
          required
        />
      </div>
      <div>
        <label htmlFor="SECOND_CANDIDATE">المرشح الثاني:</label>
        <input
          type="text"
          id="SECOND_CANDIDATE"
          name="SECOND_CANDIDATE"
          value={formData.SECOND_CANDIDATE}
          onChange={handleChange}
          placeholder="أدخل اسم المرشح الثاني"
          required
        />
      </div>
      <div>
        <label htmlFor="SECOND_CANDIDATE_LIST">قائمة المرشح الثاني:</label>
        <input
          type="text"
          id="SECOND_CANDIDATE_LIST"
          name="SECOND_CANDIDATE_LIST"
          value={formData.SECOND_CANDIDATE_LIST}
          onChange={handleChange}
          placeholder="أدخل قائمة المرشح الثاني"
          required
        />
      </div>
      <div>
        <label htmlFor="STATUS">الحالة:</label>
        <input
          type="text"
          id="STATUS"
          name="STATUS"
          value={formData.STATUS}
          onChange={handleChange}
          placeholder="أدخل حالة المناظرة"
          required
        />
      </div>
      <div>
        <label htmlFor="ZOOM_LINK">رابط زوم:</label>
        <textarea
          id="ZOOM_LINK"
          name="ZOOM_LINK"
          value={formData.ZOOM_LINK}
          onChange={handleChange}
          placeholder="أدخل رابط زوم للمناظرة"
          required
        />
      </div>
      <button type="submit">إضافة المناظرة</button>
    </form>
  );
}

export default DebateForm;