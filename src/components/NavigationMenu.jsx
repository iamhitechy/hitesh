import { Link, useLocation } from 'react-router-dom';

export default function NavigationMenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  const checkIsActive = (path) => {
    if (path === '/') return currentPath === '/';
    if (path === '/blogs') return currentPath.startsWith('/blog');
    return currentPath.startsWith(path);
  };

  const navItems = [
    {
      path: "/",
      label: "Home",
      svg: (
        <g fill="#737373">
          <path d="M3.145 6.2L8.395 2.21C8.753 1.938 9.248 1.938 9.605 2.21L14.855 6.2C15.104 6.389 15.25 6.684 15.25 6.996V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.996C2.75 6.683 2.896 6.389 3.145 6.2Z" fill="#737373" fillOpacity="0.3" stroke="none"></path>
          <path d="M9 16V12.75" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M3.145 6.2L8.395 2.21C8.753 1.938 9.248 1.938 9.605 2.21L14.855 6.2C15.104 6.389 15.25 6.684 15.25 6.996V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.996C2.75 6.683 2.896 6.389 3.145 6.2Z" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      )
    },
    {
      path: "/work",
      label: "Work",
      svg: (
        <g fill="#737373">
          <path d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z" fill="#737373" fillOpacity="0.3" stroke="none"></path>
          <path d="M9.45799 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45799 10.389C9.16999 10.537 8.82899 10.537 8.54199 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.54199 2.361C8.82999 2.213 9.17099 2.213 9.45799 2.361Z" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M16.25 6.375C16.079 7.115 15.932 8.097 15.969 9.25C15.996 10.084 16.113 10.812 16.25 11.406" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M4.25 10.75V14C4.25 15.104 6.377 16 9 16C11.623 16 13.75 15.104 13.75 14V10.75" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      )
    },
    {
      path: "/arts",
      label: "Arts",
      svg: (
        <g fill="#737373">
          <path d="M9.5 2.75L11.412 7.587L16.25 9.5L11.412 11.413L9.5 16.25L7.587 11.413L2.75 9.5L7.587 7.587L9.5 2.75Z" fill="#737373" fillOpacity="0.3" stroke="none"></path>
          <path d="M5.65799 2.99L4.39499 2.569L3.97399 1.306C3.83699 0.898 3.16199 0.898 3.02499 1.306L2.60399 2.569L1.34099 2.99C1.13699 3.058 0.998993 3.249 0.998993 3.464C0.998993 3.679 1.13699 3.87 1.34099 3.938L2.60399 4.359L3.02499 5.622C3.09299 5.826 3.28499 5.964 3.49999 5.964C3.71499 5.964 3.90599 5.826 3.97499 5.622L4.39599 4.359L5.65899 3.938C5.86299 3.87 6.00099 3.679 6.00099 3.464C6.00099 3.249 5.86199 3.058 5.65799 2.99Z" fill="#737373" stroke="none"></path>
          <path d="M9.5 2.75L11.412 7.587L16.25 9.5L11.412 11.413L9.5 16.25L7.587 11.413L2.75 9.5L7.587 7.587L9.5 2.75Z" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      )
    },
    {
      path: "/skills",
      label: "Skills",
      svg: (
        <g fill="#737373">
          <path d="M15.183 2.74329C8.17788 3.2182 4.68522 8.77876 3.81453 11.4997C4.49946 12.0114 6.58006 12.9064 9.42299 12.3924C12.2659 11.8784 12.9751 9.74808 12.9743 8.74715C15.1281 7.42278 14.0847 5.37604 15.183 2.74329Z" fill="#737373" fillOpacity="0.3" stroke="none"></path>
          <path d="M12.974 8.731C12.5 12.422 9.25 12.844 6 12.25" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M2.75 15.25C2.75 15.25 4.062 3.729 15.25 2.75C14.69 3.726 14.677 5.355 14.304 6.989C13.78 9 11.969 9.25 9.75 9.25" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      )
    },
    {
      path: "/blogs",
      label: "Blog",
      svg: (
        <g fill="#737373">
          <path d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z" fill="#737373" fillOpacity="0.3" stroke="none"></path>
          <path d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
          <path d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z" fill="none" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </g>
      )
    }
  ];

  return (
    <div id="navigation-menu" className="fixed bottom-8 left-1/2 h-fit -translate-x-1/2 rounded-full px-6 py-2.5 border border-border/50 dark:bg-[#1A1B1C]/60 bg-white/60 shadow-md backdrop-blur-md z-[999]" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, filter: 'none', transform: 'translate(-50%, 0%) translate(-0.1px, 0px)' }}>
      <div className="flex flex-row gap-8">
        {navItems.map((item) => {
          const isActive = checkIsActive(item.path);
          
          return (
            <div key={item.path} className="relative">
              <Link to={item.path}>
                <div className={`flex flex-col items-center justify-center transition-all duration-200 ${isActive ? 'scale-110 text-primary' : 'text-muted-foreground hover:text-primary/80'}`}>
                  <svg className={`mb-0.5 ${isActive ? 'opacity-100' : 'opacity-30'}`} height="18px" width="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    {item.label === 'Work' && <title>graduation cap</title>}
                    {item.svg}
                  </svg>
                  <span className="text-xxs font-medium">{item.label}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
