import React, { useState } from 'react';
import { fetchTrackingData } from './api';

const TrackingForm = () => {
  const [kurir, setKurir] = useState('spx');
  const [awb, setAwb] = useState('');
  const [dataTracking, setDataTracking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const kurirs = [
    { value: 'spx', label: 'Shopee Express' },
    { value: 'anteraja', label: 'AnterAja' },
    { value: 'dakota', label: 'Dakota Cargo' },
    { value: 'first', label: 'First Logistics' },
    { value: 'ide', label: 'ID Express' },
    { value: 'indah_cargo', label: 'Indah Cargo' },
    { value: 'jet', label: 'JET Express' },
    { value: 'jne', label: 'JNE' },
    { value: 'jnt', label: 'JNT' },
    { value: 'jnt_cargo', label: 'JNT Cargo' },
    { value: 'jxe', label: 'JX Express' },
    { value: 'kgx', label: 'KGXpress' },
    { value: 'lex', label: 'Lazada Express' },
    { value: 'lion', label: 'Lion' },
    { value: 'ninja', label: 'Ninja' },
    { value: 'pcp', label: 'PCP Express' },
    { value: 'pos', label: 'Pos Indonesia' },
    { value: 'rex', label: 'REX Express' },
    { value: 'rpx', label: 'RPX' },
    { value: 'sap', label: 'SAP Express' },
    { value: 'sicepat', label: 'SiCepat' },
    { value: 'tiki', label: 'Tiki' },
    { value: 'wahana', label: 'Wahana' },
  ];

  const sortedKurirs = kurirs.sort((a, b) => a.label.localeCompare(b.label));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchTrackingData(kurir, awb);
      setDataTracking(data);
    } catch (err) {
      setError('Gagal mengambil data pelacakan');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Cek Resi</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Kurir</label>
          <select
            value={kurir}
            onChange={(e) => setKurir(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="spx">Shopee Express</option>
            {sortedKurirs.filter(c => c.value !== 'spx').map((kurir) => (
              <option key={kurir.value} value={kurir.value}>
                {kurir.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">AWB</label>
          <input
            type="text"
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading ? 'Melacak...' : 'Lacak Paket'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 text-center">
          {error}
        </div>
      )}

      {dataTracking && dataTracking.status === 200 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Detail Pelacakan</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Ringkasan
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Detail dan status paket.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">AWB</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataTracking.data.summary.awb}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Kurir</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataTracking.data.summary.courier}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataTracking.data.summary.status}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Penerima</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataTracking.data.detail.receiver}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-6">
            Riwayat
          </h3>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4 max-h-96 overflow-y-auto">
            <ul className="divide-y divide-gray-200">
              {dataTracking.data.history.map((event, index) => (
                <li key={index} className="px-4 py-4 sm:px-6">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {event.date}
                    </p>
                    <p className="ml-2 text-sm font-normal text-gray-500 break-words">
                      {event.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingForm;
