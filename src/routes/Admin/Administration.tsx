import * as React from 'react';
import { Page, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';

export default function Administration() {


  return (

    <Page>
    <PageSection variant={PageSectionVariants.light} hasShadowBottom>

      <div className="co-m-nav-title--row">
        <Title headingLevel="h1">Administration</Title>
      </div>
    </PageSection>

    <PageSection>
      <PageSection variant={PageSectionVariants.light}>
        </PageSection>
</PageSection>
    </Page>
  );
}
