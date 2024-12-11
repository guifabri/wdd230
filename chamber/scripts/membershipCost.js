function updateDate() {
    const today =new Date()
    document.getElementById("timestamp").innerHTML = today;
    alert(document.getElementById("timestamp").innerHTML);

}

function membershipCost(value) {
    const descriptions = {
        np: '<div class="membership-level">\
        <div class="membership-title">NP Membership (Non-Profit)</div>\
        <div class="membership-cost">Cost: Free</div>\
        <div class="membership-benefits">\
            <strong>Benefits:</strong>\
            <ul>\
                <li>Participation in community events.</li>\
                <li>Access to limited free training.</li>\
                <li>Inclusion in the basic business directory.</li>\
            </ul>\
        </div>\
    </div>',
        bronze: '<div class="membership-level">\
        <div class="membership-title">Bronze Membership</div>\
        <div class="membership-cost">Cost: $100/year</div>\
        <div class="membership-benefits">\
            <strong>Benefits:</strong>\
            <ul>\
                <li>All benefits of NP Membership.</li>\
                <li>Access to standard training.</li>\
                <li>10% discount on events hosted by the Chamber.</li>\
                <li>Publication in the monthly newsletter.</li>\
            </ul>\
        </div>\
    </div>',
        silver: '<div class="membership-level">\
        <div class="membership-title">Silver Membership</div>\
        <div class="membership-cost">Cost: $250/year</div>\
        <div class="membership-benefits">\
            <strong>Benefits:</strong>\
            <ul>\
                <li>All benefits of Bronze Membership.</li>\
                <li>20% discount on events.</li>\
                <li>Featured posts on the home page.</li>\
                <li>Occasional social media promotion.</li>\
                <li>Priority at networking events.</li>\
            </ul>\
        </div>\
    </div>',
        gold: '<div class="membership-level">\
        <div class="membership-title">Gold Membership</div>\
        <div class="membership-cost">Cost: $500/year</div>\
        <div class="membership-benefits">\
            <strong>Benefits:</strong>\
            <ul>\
                <li>All benefits of Silver Membership.</li>\
                <li>30% discount on events.</li>\
                <li>Exclusive sponsorship opportunities.</li>\
                <li>Priority access to advanced training.</li>\
                <li>Monthly featured promotions on social media and newsletters.</li>\
                <li>Featured space on the home page as a "Gold Member".</li>\
            </ul>\
        </div>\
    </div>'
    };
    document.getElementById('membershipDescription').innerHTML = descriptions[value] || "";
}





 
