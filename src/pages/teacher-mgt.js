import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { TeacherListResults } from '../components/customer/teacher-list-results';
import { TeacherListToolbar } from '../components/customer/teacher-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Page = () => (
  <>
    <Head>
      <title>
        Teachers | Promise Internationals
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <TeacherListToolbar />
        <Box sx={{ mt: 3 }}>
          <TeacherListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;