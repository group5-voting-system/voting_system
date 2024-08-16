import React, { useState, useEffect } from 'react';
import { FiUsers, FiList, FiFlag } from 'react-icons/fi';
import axios from 'axios';

const OverviewPanel = () => {
  const [stats, setStats] = useState([
    { name: 'إجمالي الناخبين', value: '0', icon: FiUsers, color: 'bg-blue-500' },
    { name: 'إجمالي القوائم', value: '0', icon: FiList, color: 'bg-green-500' },
    { name: 'القوائم الحزبية', value: '0', icon: FiFlag, color: 'bg-purple-500' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/overview-stats');
        setStats([
          { ...stats[0], value: response.data.totalVoters },
          { ...stats[1], value: response.data.totalLists },
          { ...stats[2], value: response.data.totalPartyLists },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${item.color} rounded-md p-3`}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="mr-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">إجراءات سريعة</h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            إنشاء قائمة جديدة
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            عرض تفاصيل القوائم
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            إدارة الأصوات
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;