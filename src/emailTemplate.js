const createEmailTemplate = ({ Name, Company, Role, Link }) => {
    const nameParts = Name.split(' ');
    const name = nameParts[0];
  
    return `
        <p>Greetings ${name},</p>
        <p>I'm <Your Name>, a Software Developer at <Company Name>. I got to know through your LinkedIn post that <b>${Company}</b> is looking for a <b>${Role}</b>, therefore, I have mailed you to tell you about myself. I have: 
        <ul>
            <li><b>More than 3 Years</b> of hands-on experience in <b>Frontend Domain</b></li>
            <li><b>2.3 Years</b> Experience as a <b>Frontend Developer</b> at <a href="<Company Website>"><Company Name></a></li>
            <li>Worked extensively in <b>Javascript, Typescript, React & AWS</b></li>
            <li>Familiar with <b>REST, Monorepo codebases, Jest & React Testing library</b></li>
            <li><b>10 months</b> Experience as an <b>Engineering Intern</b> in <a href="<Company Website>"><Company Name></a></li>
            <li>Master's in Computer Application from  <b>VIT Vellore, 2022 Post-Graduated </b></li>
        </ul>

        <p>Currently, I am <b>serving a notice period</b> and can <b>join within 15 days</b> of receiving an offer. A little help from your side can significantly help my career.</p>
        <p>PS: I have attached my <b><a href="<Resume Drive Link>">Resume</a></b> & <b><a href="<LinkedInProfileURL>">Linkedin Profile</a></b> ${Link !== undefined ? `& <b><a href=${Link}>${Role}</a> </b> Opening`  : '' } for you to take a look at. If you find me suitable, please help me with an Interview Opportunity at ${Company}.</p>
        <p> 
        <p>
        Thanking You<br>
        Regards,<br>
        <b>XYZ Kumar</b> <br>
        <b>Contact No:</b><br>
        </p>`;
    };

  module.exports = { createEmailTemplate };
  