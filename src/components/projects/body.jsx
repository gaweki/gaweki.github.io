import React from "react";

import { handleShareURL } from "../../utils/general";

const Projects = () => {
  return (
    <div className="pt-10">
      Open source<br />
      DuckDuckGo<br />
      Translations - Indonesian Language<br />
      ReactJS ID<br />
      Fix conflict commit - Indonesian Language<br />
      Vest<br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/ealush/vest/issues/310">Add __DEV__ = true to development build</a><br />
      Hospital Run <br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/HospitalRun/hospitalrun-frontend/issues/2372">Care Plan list view action button shows translation key instead of translation text</a><br />
      <a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/HospitalRun/hospitalrun-frontend/issues/2295">Successfully completed lab shows translation key instead of actual text</a><br />
      <br />
      Frontend web developer<br />
      Oktober 2018 - Maret 2019<br />
      tokodistributor.com @ <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.tokodistributor.com/">https://www.tokodistributor.com/</a> <br />
      April 2019 - Now<br />
      PT. Distributor Indonesia Unggul - Jakarta<br />
      Frontend web developer<br />
      Oktober 2018 - Maret 2019<br />
      kuismilioner.com @ <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.milikumi.com/">https://www.milikumi.com/</a><br />
      Frontend web developer<br />
      November 2016 - Maret 2018<br />
      Gotraining.co.id @ <a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.gotraining.co.id/">https://www.gotraining.co.id/</a><br />
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