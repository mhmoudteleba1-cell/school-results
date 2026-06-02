import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Hash, User, School, Building2, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('seat_no');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const tabs = [
    { id: 'seat_no', label: 'رقم الجلوس', icon: Hash, activeColor: 'bg-[#3b66d8] text-white', inactiveColor: 'text-[#3b66d8] border-[#3b66d8]/20 bg-white hover:bg-blue-50' },
    { id: 'name', label: 'اسم الطالب', icon: User, activeColor: 'bg-[#10b981] text-white', inactiveColor: 'text-[#10b981] border-[#10b981]/30 bg-white hover:bg-green-50' },
    { id: 'school', label: 'المدرسة', icon: School, activeColor: 'bg-[#f59e0b] text-white', inactiveColor: 'text-[#f59e0b] border-[#f59e0b]/30 bg-white hover:bg-orange-50' },
    { id: 'admin', label: 'الإدارة', icon: Building2, activeColor: 'bg-[#8b5cf6] text-white', inactiveColor: 'text-[#8b5cf6] border-[#8b5cf6]/30 bg-white hover:bg-purple-50' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      setError('يرجى إدخال قيمة للبحث');
      return;
    }
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/result/${searchValue}`);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        
        {/* Main Card */}
        <div className="bg-[#f0f4f8] rounded-xl overflow-hidden shadow-card border border-slate-200/60 relative">
          
          {/* Header Area */}
          <div className="p-6 relative">
             <div className="absolute left-0 bottom-0 opacity-40 pointer-events-none w-48 h-48">
                 {/* Placeholder for the pillar graphic from image */}
                 <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600/30" fill="currentColor">
                    <rect x="10" y="40" width="15" height="50" rx="2" />
                    <rect x="8" y="30" width="19" height="8" rx="1" />
                    <rect x="5" y="90" width="25" height="5" rx="1" />
                    
                    <rect x="40" y="55" width="15" height="35" rx="2" />
                    <rect x="38" y="45" width="19" height="8" rx="1" />
                    <rect x="35" y="90" width="25" height="5" rx="1" />
                    
                    <rect x="70" y="25" width="15" height="65" rx="2" />
                    <rect x="68" y="15" width="19" height="8" rx="1" />
                    <rect x="65" y="90" width="25" height="5" rx="1" />
                    <rect x="0" y="95" width="100" height="3" />
                 </svg>
             </div>
             
             <h1 className="text-2xl md:text-3xl font-bold text-right text-slate-800 flex items-center justify-end gap-3 z-10 relative">
                نتيجة الشهادة الثانوية 2026 بالاسم ورقم الجلوس
                <MapPin className="w-8 h-8 text-blue-600" />
             </h1>
          </div>

          {/* White inner container */}
          <div className="bg-white rounded-xl m-2 md:m-4 p-4 md:p-6 shadow-sm border border-slate-100 z-10 relative">
            
            {/* Tabs */}
            <div className="flex flex-wrap md:flex-nowrap justify-end gap-3 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 border ${isActive ? tab.activeColor : tab.inactiveColor}`}
                  >
                    {tab.label}
                    <Icon className="w-5 h-5" />
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm relative">
              
              <div className="flex justify-end items-center gap-2 mb-3 text-slate-600 font-bold">
                 <span># رقم الجلوس</span>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-4 items-stretch">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="أدخل رقم الجلوس"
                    className="w-full text-right p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-white text-slate-800"
                    dir="rtl"
                  />
                  {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#3b66d8] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>ابحث الآن</span>
                      <Search className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex justify-end items-center gap-1 mt-3 text-sm text-slate-500">
                <span>رقم الجلوس بالأرقام فقط</span>
                <Info className="w-4 h-4" />
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
