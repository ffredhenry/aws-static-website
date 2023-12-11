// interactive job history
document.addEventListener('DOMContentLoaded', function()
{
	// array with employment history data
	const employmentHistory = [
		{
			id: 1, 
			title: "SOC Analyst", 
			company: "AT&T Cybersecurity", 
			years: "03/2023 - Present", 
			description: "SOC Analyst Test"
		},
		{
			id: 2,
			title: "Software QA Test Engineer",
			company: "Meta Platforms (Contractor through Wipro LTD)",
			years: "10/2020 - 02/2023",
			description: "ProdOps (Product Operations)"
		},
		{
			id: 3,
			title: "Supply Chain Rotational Analyst",
			company: "DistributionNOW",
			years: "06/2019 - 04/2020",
			description: "Operational Excellence, Process Optimization"
		},
		{
			id: 4,
			title: "IT Support Specialist",
			company: "Texas A&M College of Engineering",
			years: "08/2018 - 05/2019",
			description: "Automation and technical support"
		},
		{
			id: 5,
			title: "Supply Chain & Procurement Intern",
			company: "A&C Plastics, Inc.",
			years: "05/2018 - 08/2018",
			description: "Digital transformation, systems integration & process improvement"
		}
	];

	const timeline = document.getElementById('timeline');

	// timeline entries
	employmentHistory.forEach(job => {
		// container entry for each job
		const entry = document.createElement('div');
		entry.className = 'entry';
		entry.id = 'entry-' + job.id;

		// title header for each job entry
		const header = document.createElement('div');
		header.className = 'entry-header';
		header.innerText = job.title;

		// Content container for job entry, hidden initially
		const content = document.createElement('div');
		content.className = 'entry-content';
		content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown)
			{
                // Display toggle, shows if hidden and hides if showing
                content.style.display = 'block';
                entry.classList.add('active');
            } 
        });

        timeline.appendChild(entry);
    });
});
