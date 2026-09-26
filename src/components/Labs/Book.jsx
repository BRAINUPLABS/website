import React from 'react';

const Book = ({ setShowModal, selectedLabs }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Demo Booked:", data);
        
        alert("Demo booked successfully! We will contact you soon.");
        
        if (setShowModal) {
            setShowModal(false);
        }
    };

    // Close modal when clicking on the blurred background
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && setShowModal) {
            setShowModal(false);
        }
    };

    return (
        <div 
            className="fixed inset-0 z-[99999] bg-[#0D1117]/70 backdrop-blur-md flex items-center justify-center p-5"
            onClick={handleOverlayClick}
        >
            <div 
                className="bg-white rounded-3xl w-full max-w-[750px] max-h-[90vh] overflow-y-auto relative shadow-2xl p-10 m-0"
            >
                {setShowModal && (
                    <button 
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="absolute top-5 right-5 bg-black/5 border-none cursor-pointer text-xl text-[#555] z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-black/10 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}

                <h2 className="text-3xl font-bold mb-8 text-[#0D1117]">
                    Book a Lab Demo
                </h2>

                <form className="demo-form" id="demoForm" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 font-semibold text-[#333]">Selected Lab *</label>
                        <select 
                            name="selectedLab" 
                            id="selectedLab" 
                            defaultValue={selectedLabs || ""} 
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base bg-white"
                        >
                            <option value="" disabled>Select a Lab</option>
                            <option value="lab-a">Infinity Maker's Place</option>
                            <option value="lab-b">Little Maker's Space</option>
                            <option value="lab-c">Robocraft Lab</option>
                            <option value="lab-d">Mechatron Lab</option>
                            <option value="lab-ngo">NGO Model Lab</option>
                        </select>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">School Name *</label>
                            <input type="text" name="schoolName" id="schoolName" placeholder="e.g., Delhi Public School" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">Your Name *</label>
                            <input type="text" name="personName" id="personName" placeholder="e.g., Rahul Sharma" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">Designation *</label>
                            <input type="text" name="designation" id="designation" placeholder="e.g., Principal / Teacher" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">Phone Number *</label>
                            <input type="tel" name="phone" id="phone" placeholder="+91 XXXXX XXXXX" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">Email *</label>
                            <input type="email" name="email" id="email" placeholder="school@example.com" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">City *</label>
                            <input type="text" name="city" id="city" placeholder="e.g., Jaipur" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">State *</label>
                            <select name="state" id="state" defaultValue="" required className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base bg-white">
                                <option value="" disabled>Select State</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold text-[#333]">Preferred Date</label>
                            <input type="date" name="preferredDate" id="preferredDate" className="w-full px-4 py-3 rounded-xl border border-[#ddd] outline-none text-base" />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full p-4 bg-[#FF822E] hover:bg-[#d96318] text-white border-none rounded-xl text-lg font-bold cursor-pointer shadow-[0_8px_20px_rgba(255,130,46,0.3)] flex items-center justify-center gap-[10px] transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <i className="fas fa-calendar-check"></i> Request A Quote
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Book;