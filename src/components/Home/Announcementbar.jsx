export default function Announcementbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] h-[38px] flex items-center bg-gradient-to-br from-[#0c709a] to-[#ff822e]" id="announcementBar">
    <div className="w-full px-4 flex items-center gap-[10px] relative">

      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>

      <div className="overflow-hidden w-full text-white md:flex md:justify-center" id="announcementText">
        <div className="flex gap-[50px] whitespace-nowrap w-max md:w-full md:justify-center animate-[marquee_12s_linear_infinite] md:animate-none" id="announcementTrack">
          <span className="whitespace-nowrap">
            🚀 Now Live! Brain Up Labs – Building Future Innovators with Neurotech, AI & Robotics
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}
