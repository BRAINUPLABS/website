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
            className="book-modal-overlay"
            onClick={handleOverlayClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99999,
                backgroundColor: 'rgba(13, 17, 23, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}
        >
            <div 
                className="book-modal-content demo-right"
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    width: '100%',
                    maxWidth: '750px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    padding: '40px',
                    margin: 0
                }}
            >
                {setShowModal && (
                    <button 
                        type="button"
                        onClick={() => setShowModal(false)}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(0,0,0,0.05)',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            color: '#555',
                            zIndex: 50,
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                        aria-label="Close modal"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}

                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: '#0D1117' }}>
                    Book a Lab Demo
                </h2>

                <form className="demo-form" id="demoForm" onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Selected Lab *</label>
                        <select 
                            name="selectedLab" 
                            id="selectedLab" 
                            defaultValue={selectedLabs || ""} 
                            required
                            style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }}
                        >
                            <option value="" disabled>Select a Lab</option>
                            <option value="lab-a">Infinity Maker's Place</option>
                            <option value="lab-b">Little Maker's Space</option>
                            <option value="lab-c">Robocraft Lab</option>
                            <option value="lab-d">Mechatron Lab</option>
                            <option value="lab-ngo">NGO Model Lab</option>
                        </select>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>School Name *</label>
                            <input type="text" name="schoolName" id="schoolName" placeholder="e.g., Delhi Public School" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Your Name *</label>
                            <input type="text" name="personName" id="personName" placeholder="e.g., Rahul Sharma" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Designation *</label>
                            <input type="text" name="designation" id="designation" placeholder="e.g., Principal / Teacher" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Phone Number *</label>
                            <input type="tel" name="phone" id="phone" placeholder="+91 XXXXX XXXXX" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email *</label>
                            <input type="email" name="email" id="email" placeholder="school@example.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>City *</label>
                            <input type="text" name="city" id="city" placeholder="e.g., Jaipur" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>State *</label>
                            <select name="state" id="state" defaultValue="" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }}>
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
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Preferred Date</label>
                            <input type="date" name="preferredDate" id="preferredDate" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem' }} />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn-demo-submit"
                        style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: '#FF822E',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1.125rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(255, 130, 46, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            transition: 'background 0.3s, transform 0.2s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d96318'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FF822E'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <i className="fas fa-calendar-check"></i> Request A Quote
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Book;