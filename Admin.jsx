import { useState } from 'react';
import { UploadCloud, FileSpreadsheet, Users, Database } from 'lucide-react';

export default function Admin() {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // Simulate parsing
    setTimeout(() => {
      setIsUploading(false);
      alert('تم رفع الملف بنجاح وتحديث قاعدة البيانات!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-5xl space-y-6">
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800">لوحة التحكم</h1>
          <div className="flex gap-2">
             <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-slate-600 font-bold hover:bg-slate-50">تسجيل الخروج</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-blue-600"><Users className="w-6 h-6" /></div>
              <div>
                <p className="text-slate-500 font-bold text-sm">إجمالي الطلاب</p>
                <p className="text-2xl font-black text-slate-800">12,450</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className="bg-emerald-100 p-4 rounded-lg text-emerald-600"><FileSpreadsheet className="w-6 h-6" /></div>
              <div>
                <p className="text-slate-500 font-bold text-sm">الطلاب الناجحين</p>
                <p className="text-2xl font-black text-slate-800">10,200</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-lg text-purple-600"><Database className="w-6 h-6" /></div>
              <div>
                <p className="text-slate-500 font-bold text-sm">حالة النظام</p>
                <p className="text-xl font-bold text-emerald-500">متصل</p>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">رفع بيانات الطلاب (Excel)</h2>
            <p className="text-slate-500 text-sm mt-1">قم برفع ملف Excel يحتوي على بيانات الطلاب والدرجات لتحديث قاعدة البيانات</p>
          </div>
          
          <div className="p-8">
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
               <UploadCloud className="w-16 h-16 text-slate-400 mb-4" />
               <h3 className="text-lg font-bold text-slate-700 mb-2">اسحب وأفلت ملف الإكسيل هنا</h3>
               <p className="text-slate-500 mb-6">أو اضغط لاختيار ملف من جهازك (.xlsx, .csv)</p>
               <input type="file" id="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
               <label htmlFor="file" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg cursor-pointer transition-colors shadow-md">
                 {isUploading ? 'جاري الرفع...' : 'اختيار ملف'}
               </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
