
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '2013', label: 'Berdiri Sejak' },
    { value: '224', label: 'Siswa Aktif' },
    { value: '1', label: 'Program Keahlian' },
    { value: '8000', label: 'Luas Area (m²)' },
  ];

  return (
    <section className="py-16 bg-school-blue dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-blue-100 dark:text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
