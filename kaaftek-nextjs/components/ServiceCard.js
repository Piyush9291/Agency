export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="w-7 h-7 text-primary-600" />}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}