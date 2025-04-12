
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
        <h2 className="text-3xl font-bold text-center text-white mb-10">Informasi Sekolah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card">
              <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              
              <h3 className="stats-value">{stat.value}</h3>
              <p className="stats-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
