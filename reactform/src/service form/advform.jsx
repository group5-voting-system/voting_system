import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdvertisementForm = () => {
  const [formData, setFormData] = useState({
    nationalId: '',
    listId: '',
    circleId: '',
    title: '',
    description: '',
    url: '',
    startDate: '',
    endDate: '',
    paymentId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submit-advertisement', formData);
      Swal.fire({
        title: 'تم إرسال طلبك!',
        text: `تم إنشاء الإعلان بنجاح برقم: ${response.data.id}`,
        icon: 'success',
        confirmButtonText: 'حسنا'
      });
      // Reset form
      setFormData({
        nationalId: '',
        listId: '',
        circleId: '',
        title: '',
        description: '',
        url: '',
        startDate: '',
        endDate: '',
        paymentId: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: 'خطأ!',
        text: 'حدث خطأ أثناء إرسال النموذج',
        icon: 'error',
        confirmButtonText: 'حسنا'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">نموذج الإعلان</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationalId">
          رقم الهوية الوطنية
        </label>
        <input
          type="number"
          id="nationalId"
          name="nationalId"
          value={formData.nationalId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          placeholder="أدخل رقم الهوية الوطنية"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="listId">
          رقم القائمة
        </label>
        <input
          type="number"
          id="listId"
          name="listId"
          value={formData.listId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="أدخل رقم القائمة"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="circleId">
          رقم الدائرة
        </label>
        <input
          type="number"
          id="circleId"
          name="circleId"
          value={formData.circleId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="أدخل رقم الدائرة"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          عنوان الإعلان
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="أدخل عنوان الإعلان"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          وصف الإعلان
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          required
          placeholder="أدخل وصف الإعلان"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
          رابط الإعلان
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="أدخل رابط الإعلان"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
          تاريخ البدء
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
          تاريخ الانتهاء
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentId">
          رقم الدفع
        </label>
        <input
          type="number"
          id="paymentId"
          name="paymentId"
          value={formData.paymentId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="أدخل رقم الدفع"
        />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
        إرسال الإعلان
      </button>
    </form>
  );
};

export default AdvertisementForm;