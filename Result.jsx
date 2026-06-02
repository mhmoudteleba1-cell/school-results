import { useParams, Link } from 'react-router-dom';
import { ArrowRight, User, Hash, School, Building2, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Result() {
  const { seat_no } = useParams();

  // Mock data for demonstration
  const mockStudent = {
    id: 1,
    seat_no: seat_no,
    name: 'أحمد محمود عبدالله السيد',
    school: 'مدرسة التوفيقية الثانوية بنين',
    administration: 'إدارة شمال التعليمية',
    arabic: 75,
    english: 55,
    math: 50,
    physics: 58,
    chemistry: 45,
    history: 52,
    total: 335,
    percentage: 88.15,
    status: 'ناجح'
  };

  const subjects = [
    { name: 'اللغة العربية', max: 80, score: mockStudent.arabic },
    { name: 'اللغة الإنجليزية', max: 60, score: mockStudent.english },
    { name: 'الرياضيات', max: 60, score: mockStudent.math },
    { name: 'الفيزياء', max: 60, score: mockStudent.physics },
    { name: 'الكيمياء', max: 60, score: mockStudent.chemistry },
    { name: 'التاريخ', max: 60, score: mockStudent.history },
  ];

  const getGrade = (score, max) => {
    const p = (score / max) * 100;
    if (p >= 85) return { label: 'ممتاز', color: 'text-emerald-600 bg-emerald-50' };
    if (p >= 75) return { label: 'جيد جداً', color: 'text-blue-600 bg-blue-50' };
    if (p >= 65) return { label: 'جيد', color: 'text-yellow-600 bg-yellow-50' };
    if (p >= 50) return { label: 'مقبول', color: 'text-orange-600 bg-orange-50' };
    return { label: 'ضعيف', color: 'text-red-600 bg-red-50' };
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Navigation */}
        <div className="flex justify-start">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
            <ArrowRight className="w-5 h-5" />
            <span>العودة للبحث</span>
          </Link>
        </div>

        {/* Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden"
        >
          <div className="bg-gradient-to-l from-blue-600 to-blue-800 p-6 text-white flex justify-between items-center relative overflow-hidden">
             <div className="z-10">
                <h2 className="text-2xl font-bold mb-2">بطاقة نتيجة الطالب</h2>
                <p className="text-blue-100">العام الدراسي 2025 - 2026</p>
             </div>
             {mockStudent.status === 'ناجح' ? (
                <div className="z-10 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg border-2 border-emerald-400">
                  <CheckCircle className="w-5 h-5" />
                  ناجح
                </div>
             ) : (
                <div className="z-10 bg-red-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg border-2 border-red-400">
                  <XCircle className="w-5 h-5" />
                  راسب
                </div>
             )}
             
             {/* Decorative pattern */}
             <svg className="absolute opacity-10 top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <polygon points="0,100 100,0 100,100" fill="currentColor" />
             </svg>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-md"><User className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold">اسم الطالب</p>
                    <p className="font-semibold text-slate-800">{mockStudent.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-md"><School className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold">المدرسة</p>
                    <p className="font-semibold text-slate-800">{mockStudent.school}</p>
                  </div>
                </div>
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-md"><Hash className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold">رقم الجلوس</p>
                    <p className="font-semibold text-slate-800">{mockStudent.seat_no}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-md"><Building2 className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold">الإدارة التعليمية</p>
                    <p className="font-semibold text-slate-800">{mockStudent.administration}</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Score Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-premium border border-slate-100 text-center flex flex-col items-center justify-center"
            >
               <p className="text-slate-500 font-bold mb-2">المجموع الكلي</p>
               <div className="flex items-end gap-2">
                 <span className="text-5xl font-black text-slate-800">{mockStudent.total}</span>
                 <span className="text-xl text-slate-400 font-bold mb-1">/ 380</span>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-premium border border-slate-100 text-center flex flex-col items-center justify-center"
            >
               <p className="text-slate-500 font-bold mb-2">النسبة المئوية</p>
               <div className="text-5xl font-black text-blue-600" dir="ltr">
                 {mockStudent.percentage}%
               </div>
            </motion.div>
        </div>

        {/* Grades Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden"
        >
          <div className="p-5 border-b border-slate-100 bg-slate-50">
            <h3 className="font-bold text-lg text-slate-800">تفاصيل الدرجات</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-50/50 text-slate-500 text-sm">
                <tr>
                  <th className="p-4 font-bold border-b">المادة</th>
                  <th className="p-4 font-bold border-b text-center">الدرجة</th>
                  <th className="p-4 font-bold border-b text-center">النهاية العظمى</th>
                  <th className="p-4 font-bold border-b text-center">التقدير</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, idx) => {
                  const grade = getGrade(sub.score, sub.max);
                  return (
                    <tr key={idx} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-semibold text-slate-700">{sub.name}</td>
                      <td className="p-4 text-center font-bold text-slate-800">{sub.score}</td>
                      <td className="p-4 text-center text-slate-500">{sub.max}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${grade.color}`}>
                          {grade.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
