
import { Link } from 'react-router-dom';
export default function CourseSide() {
      const navItems = [
        { to: '/learn/ibirebwaniteka', label: 'Ibirebwa ni teka' },
        { to: '/learn', label: 'Ibisobanuro' },
        { to: '/learn', label: 'Abakozi babifitiye ububasha' },
        { to: '/learn', label: 'Impanuka' },
        { to: '/learn', label: 'ibitegekwa-ibyakwa-ibimenyetso' },
        { to: '/learn', label: 'uruhushya rwo gutwara ibinyabiziga' },
        { to: '/learn', label: 'kurinda inzira nyabagendwa nabayigenderamo' },
        { to: '/learn', label: 'ibyerekeye abayobozi' },
        { to: '/learn', label: 'Uruhande rugenderwamo mumuhanda' },
        { to: '/learn', label: 'Inkomane Gutambuka mbere ' },
        { to: '/learn', label: 'imiyoborere' },
        { to: '/learn', label: 'kubisikanan no kunyuranamo' },
        { to: '/Exam', label: 'Exam' },
      ];
  return (
    <div className="w-54 ml-11 pb-7  bg-[#F7F7F7] text-black rounded-md  flex flex-col">

      <h1 className="py-3 font-family-poppins pl-7 font-semibold">Courses</h1>
      <nav className="flex-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-white hover:text-primary-color transition-all duration-200 group"
          >
            <span className="text-gray-600 group-hover:text-lime-400 transition-colors text-[20px]">
              {/* {item.icon} */}
            </span>
            <span className="text-[14px] font-medium text-black group-hover:text-primary-color transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
    
  )
}
