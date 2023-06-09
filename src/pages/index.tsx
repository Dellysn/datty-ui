import { Layout } from '@/components/layout';
import { Button, Container, Text, Title, createStyles } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });
const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    flexDirection: 'column',
    minHeight: '100vh',
   
  },
  description: {
    marginTop: theme.spacing.xl,
    // marginBottom: theme.spacing.xl * 2,
    maxWidth: '600px',
  },
  buttonGroup: {
    display: 'flex',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
    '& > * + *': {
      marginLeft: theme.spacing.md,
    },
    gap: theme.spacing.md,
  },
}));

export default function Home() {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className}`}>
        <Layout withSidebar={router.pathname === '/docs'} withFooter={false}>
          <Container size={1100}>
            <div className={classes.wrapper}>
              <Title order={1} size={85}>
                Prebuilt Mantine UI Components for faster development
              </Title>
              <Text size="lg" className={classes.description}>
                Datty UI is a set of accessible and reusable components that are commonly used in
                web applications. Provides premade responsive and color mode flexible components to
                help you build faster than ever.
              </Text>

              <div className={classes.buttonGroup}>
                <Button size="xl" component={Link} href="/getting-started/installation">
                  Get Started
                </Button>
                <Button size="xl" rightIcon={<IconBrandGithub />}>
                  Github
                </Button>
              </div>
            </div>
          </Container>
        </Layout>
      </main>
    </>
  );
}
