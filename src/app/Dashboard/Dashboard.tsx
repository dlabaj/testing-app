import * as React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Flex,
  Gallery,
  PageSection,
  Title,
} from '@patternfly/react-core';
import { ChartLineIcon, CubesIcon, ServerIcon, UsersIcon } from '@patternfly/react-icons';

const Dashboard: React.FunctionComponent = () => (
  <>
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
    </PageSection>
    <PageSection>
      <Gallery hasGutter minWidths={{ default: '300px' }}>
        <Card>
          <CardHeader>
            <CardTitle>
              <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
                <ChartLineIcon />
                Overview
              </Flex>
            </CardTitle>
          </CardHeader>
          <CardBody>
            View key metrics and performance at a glance. Track trends and monitor your most important indicators.
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
                <CubesIcon />
                Activity
              </Flex>
            </CardTitle>
          </CardHeader>
          <CardBody>
            Recent activity and events across your environment. Stay informed about changes and updates.
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
                <ServerIcon />
                Resources
              </Flex>
            </CardTitle>
          </CardHeader>
          <CardBody>
            Resource utilization and capacity. Monitor CPU, memory, and storage across your infrastructure.
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Flex gap={{ default: 'gapSm' }} alignItems={{ default: 'alignItemsCenter' }}>
                <UsersIcon />
                Users
              </Flex>
            </CardTitle>
          </CardHeader>
          <CardBody>
            User management and access. View active users, roles, and permissions.
          </CardBody>
        </Card>
      </Gallery>
    </PageSection>
  </>
);

export { Dashboard };
