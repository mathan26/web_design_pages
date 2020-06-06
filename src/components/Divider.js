import React from "react";

const ColumnDivider = () => {
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">
        <div className="column">
          <div className="column">
            <div className="ui raised segment">
              <a className="ui red ribbon label big">WORK EXPERIENCE</a>
              <span className="text purple">
                <h2>Junior Engineer - Development</h2>
                <h3>IVTL Infoview Technologies Pvt Ltd</h3>
                <h5 className="ui  small blue left floated">
                  06/2016 – Present
                </h5>
                <p className="ui content descrption">
                  <p>
                    At Infoview, we are constantly working on innovative
                    products and solutions that aim to change the way technology
                    is used in the future.
                  </p>
                  <p>
                    Tasks
                    <div class="ui bulleted list">
                      <div class="item">
                        Responsible for coordinating with the team in creating
                        Web based Enterprise Resource Planning Applications with
                        high efficiency.
                      </div>
                      <div class="item">
                        RExperience in implementing and supporting large scale
                        software applications.
                      </div>
                      <div class="item">
                        Involved in requirement gathering, project architecture
                        design, data model design, preparing design document,
                        and preparing project proposal.
                      </div>
                    </div>
                  </p>
                </p>
              </span>
            </div>
            <div className="ui raised segment ">
              <a className="ui red ribbon label big">TECHNICAL (IT) SKILLS</a>
              <div className="text purple">
                <h4>Tools</h4>
                <div class="ui bulleted list">
                  <div>
                    Eclipse IDE, Visual Studio Code, Jenkins, GitLab, Maven,
                    SONAR
                  </div>
                </div>
                <h4>Languages</h4>
                <div class="ui bulleted list">
                  <div>
                    Java, Javascript, Jquery, React JS, HTML5, CSS3, Semantic-UI
                  </div>
                </div>
                <h4>Web Technologies</h4>
                <div class="ui bulleted list">
                  <div>
                    Spring core, Spring MVC, SpringBoot, Restful Api,
                    Microservices
                  </div>
                </div>
                <h4>Database Management</h4>
                <div class="ui bulleted list">
                  <div>Oracle, postgrSQL</div>
                </div>
              </div>
            </div>
            <div className="ui raised segment">
              <a className="ui red ribbon label big">SKILLS</a>
              <h4>
                <button class="ui blue button">Creativity</button>
                <button class="ui blue button">Team Work</button>
                <button class="ui blue button">Problem Solving</button>
                <div class="ui hidden divider"></div>
                <button class="ui blue button">Communication</button>
              </h4>
            </div>
            <div className="ui raised segment">
              <a className="ui red ribbon label big">EDUCATION</a>
              <h4 className="text purple">
                Bachelor's in Computer Science and Engineering
                <h4>Angel College of Engineering and Technology</h4>
                <h5>2012-2016 (7.7 CGPA )</h5>
              </h4>
            </div>
          </div>
        </div>
        <div className="column ">
          <div className="column">
            <div className="ui raised segment ">
              <a className="ui red ribbon label big">PROJECTS</a>
              <h4 className="text purple">
                Cortex ( Organization Management and Issue Tracking) (09/2019 –
                Present)
              </h4>
              <div className="text purple ui bulleted list">
                <div class="item">
                  Responsible for coordinating with the team in creating Web
                  based Enterprise Resource Planning Applications with high
                  efficiency.
                </div>
                <div class="item">
                  Part of the web development team with sole responsibility of
                  developing application for the Organization management.
                </div>
              </div>
              <h4>HUE (High Usability Enterprise) (07/2018 – 08/2019)</h4>
              <div className="text purple ui bulleted list">
                <div class="item">
                  AI Based ERP Package composed of Accounts, Supply Chain
                  Management and Human Resource Management.
                </div>
                <div class="item">
                  Responsible for Developing and Detailing the Business flow of
                  Supply Chain Management Modules as per the requirements of the
                  clients.
                </div>
                <div class="item">
                  Responsible for Software Coding, Systems Integration, Code
                  Maintenance and Unit Testing such that to maintain the high
                  quality standards of the organisation .
                </div>
              </div>
              <h4>
                COMPANY CJK (Human Resource Management and Payroll Management)
                (06/2016 – 07/2018)
              </h4>
              <div className="text purple ui bulleted list">
                <div class="item">
                  HR based Management software package that helps to organize
                  large amount of data efficiently by using this application
                  complicated HR works can be simplified.
                </div>
                <div class="item">
                  The Role defines a conversion of COMPANY ERP Package from a
                  Delphi based Desktop Application into a JAVA based Web
                  Application.
                </div>
                <div class="item">
                  Part of payroll department where developed and supported
                  modules that has been used in the payroll processing.
                </div>
              </div>
            </div>
          </div>
          <div className="ui raised segment">
            <a className="ui red ribbon label big">CERTIFICATIONS</a>
            <div className="text purple ui bulleted list">
              <div class="item">
                Modern React with Redux by Stephen Grider on Udemy.
              </div>
              <div class="item">
                Java 8 New Features In Simple Way by DURGASOFT DURGA on Udemy.
              </div>
              <div class="item">
                Complete JDBC Programming by DURGASOFT DURGA on Udemy.
              </div>
            </div>
          </div>
          <div className="ui raised segment">
            <a className="ui red ribbon label big">LANGUAGES</a>
            <div className="text purple ui bulleted list">
              <h4 class="item">
                English Full
                <h5>Professional Proficiency</h5>
              </h4>
              <h4 class="item">
                Tamil
                <h5>Native or Bilingual Proficiency</h5>
              </h4>
            </div>
          </div>
          <div className="ui raised segment">
            <a className="ui red ribbon label big">INTERESTS</a>
            <h4>
              <button class="ui black basic button">Reading</button>
              <button class="ui black basic button">Writing</button>
              <button class="ui black basic button">Travelling</button>
              <button class="ui black basic button">computing</button>
            </h4>
          </div>
        </div>
      </div>
      <div className="ui vertical divider"></div>
    </div>
  );
};

export default ColumnDivider;
