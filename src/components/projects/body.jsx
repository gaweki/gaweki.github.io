import React from "react";

import { handleShareURL } from "../../utils/general";

const Projects = () => {
  return (
    <div className="pt-10">
      Open source<br />
      DuckDuckGo<br />
      Translations - Indonesian Language<br />
      ReactJS ID<br />
      Translations - Indonesian Language<br />
      Vest<br />
      <a href="https://github.com/ealush/vest/issues/310">Add __DEV__ = true to development build</a><br />
      <br />
      Frontend web developer<br />
      Oktober 2018 - Maret 2019<br />
      kuismilioner.com<br />
      April 2019 - Now<br />
      PT. Distributor Indonesia Unggul - Jakarta<br />
      Frontend web developer<br />
      Oktober 2018 - Maret 2019<br />
      kuismilioner.com<br />
      Frontend web developer<br />
      November 2016 - Maret 2018<br />
      Gotraining.co.id<br />
      Frontend web developer<br />
      <br />
      CV Link : <span className="underline" tabIndex="0" onKeyDown={(e) => e.key === 67 ? '' : ''}
        role="button"
        aria-label="Button Share CV"
        onClick={() => handleShareURL('CV Andrel', 'https://drive.google.com/file/d/1cgDzV-w3B6ZYJlFg6h0wjB8toMZoaA-s/view?usp=sharing')}>
        click here
        </span>
    </div>
  )
};

export default Projects;