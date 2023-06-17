import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const WhiteBackground = styled('div')({
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  padding: '20px',
});

const BlurredShape = styled('div')({
  position: 'absolute',
  top: '-200px',
  left: '-200px',
  width: '600px',
  height: '600px',
  borderRadius: '50%',
  filter: 'blur(80px)',
  backgroundColor: '#004d40',
  opacity: 0.2,
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
  marginLeft: '20px',
});

const LogoImage = styled('img')({
  height: '120px',
  marginRight: '10px',
});

const GreenText = styled(Typography)({
  color: '#004d40',
  fontWeight: 'bold',
  letterSpacing: '2px',
});

const HowItWorksCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CardImage = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom: '16px',
});

const RevenueStreamCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const TeamCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '300px',
  minHeight: '300px',
  position: 'relative',
  backgroundColor: '#ffffff',
  color: 'black',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const TeamMemberOverlay = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#ffffff',
});

const TeamMemberName = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '4px',
});

const TeamMemberRole = styled(Typography)({
  fontSize: '14px',
});

const LandingPage = () => {
  return (
    <WhiteBackground>
      {/* Blurred background shapes */}
      <BlurredShape />
      <BlurredShape style={{ top: '-300px', left: 'calc(50% - 300px)', width: '800px', height: '800px' }} />
      <BlurredShape style={{ top: 'calc(100% - 200px)', left: 'calc(50% - 400px)', width: '1000px', height: '1000px' }} />

      {/* Logo */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <LogoContainer>
          <LogoImage src="https://i.ibb.co/jG5TYnf/Logo-Foodie-Hub.png" alt="FoodieHub" />
        </LogoContainer>

        {/* How It Works section */}
        <Container sx={{ marginTop: '50px', marginBottom: '100px' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <img src="https://i.ibb.co/Gcn5XN1/Screenshot-2023-06-17-113847.png" alt="Phone" style={{ width: '100%', maxWidth: '400px' }} />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Grid container direction="column" alignItems="center">
                  <GreenText variant="h4" align="center" gutterBottom>
                    Personalized Food Experiences Just for You!
                  </GreenText>
                  <Typography variant="body1" align="center" gutterBottom style={{ color: '#004d40' }}>
                    FoodieHub, for cooking enthusiasts and supports those with food allergies and helps manage ingredients to reduce food waste.
                  </Typography>
                  <Button variant="contained" color="primary" size="large">
                    Get Started
                  </Button>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* How It Works section */}
        <Container sx={{ marginTop: '150px', marginBottom: '200px' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: '#004d40' }}>
            How It Works
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <AnimatePresence>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <HowItWorksCard>
                    <CardImage src="https://i.ibb.co/GPzySCx/Ramen-Front.png" alt="Card Image 1" />
                    <Typography variant="h5" gutterBottom>
                      Discover Personalized Recipes
                    </Typography>
                    <Typography variant="body1">
                      Get recipe recommendations tailored to your preferences, dietary needs, and allergies.
                    </Typography>
                  </HowItWorksCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <HowItWorksCard>
                    <CardImage src="https://i.ibb.co/GPbf1vg/Plan.png" alt="Card Image 2" />
                    <Typography variant="h5" gutterBottom>
                      Manage Ingredients Effectively
                    </Typography>
                    <Typography variant="body1">
                      Effortlessly synchronize and manage your ingredients and virtual pantry.
                    </Typography>
                  </HowItWorksCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                  <HowItWorksCard>
                    <CardImage src="https://i.ibb.co/85535M5/3D00955.png" alt="Card Image 3" />
                    <Typography variant="h5" gutterBottom>
                      Interactive Cooking Experience
                    </Typography>
                    <Typography variant="body1">
                      Engage in an interactive and immersive cooking experience with step-by-step instructions.
                    </Typography>
                  </HowItWorksCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
                  <HowItWorksCard>
                    <CardImage src="https://i.ibb.co/qM1K4XB/Networking.png" alt="Card Image 4" />
                    <Typography variant="h5" gutterBottom>
                      Join an Engaging Food Community
                    </Typography>
                    <Typography variant="body1">
                      Connect with like-minded food enthusiasts, chefs, and share your culinary journey.
                    </Typography>
                  </HowItWorksCard>
                </motion.div>
              </Grid>
            </AnimatePresence>
          </Grid>
        </Container>

        {/* Revenue Streams section */}
        <Container sx={{ marginTop: '250px', marginBottom: '300px' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: '#004d40' }}>
            Revenue Streams
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <AnimatePresence>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
                  <RevenueStreamCard>
                    <CardImage src="https://i.ibb.co/ZKRK8cv/Asset-1.png" alt="Card Image 5" />
                    <Typography variant="h5" gutterBottom>
                      Premium Subscriptions
                    </Typography>
                    <Typography variant="body1">
                      $9.99/month
                      <br />
                      Enhanced features and exclusive content
                    </Typography>
                  </RevenueStreamCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
                  <RevenueStreamCard>
                    <CardImage src="https://i.ibb.co/YWRkJ3Q/sale.png" alt="Card Image 6" />
                    <Typography variant="h5" gutterBottom>
                      In-App Purchases
                    </Typography>
                    <Typography variant="body1">
                      Varies
                      <br />
                      Ingredient packages and specialized recipes
                    </Typography>
                  </RevenueStreamCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }}>
                  <RevenueStreamCard>
                    <CardImage src="https://i.ibb.co/HPNscJ4/Promotion.png" alt="Card Image 7" />
                    <Typography variant="h5" gutterBottom>
                      Advertising Partnerships
                    </Typography>
                    <Typography variant="body1">
                      Contact for Pricing
                      <br />
                      Targeted ads and advertising collaborations
                    </Typography>
                  </RevenueStreamCard>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.6 }}>
                  <RevenueStreamCard>
                    <CardImage src="https://i.ibb.co/1rzFt9c/Diagram.png" alt="Card Image 8" />
                    <Typography variant="h5" gutterBottom>
                      Data Monetization
                    </Typography>
                    <Typography variant="body1">
                      Data-Driven Partnerships
                      <br />
                      Aggregated and anonymized user insights
                    </Typography>
                  </RevenueStreamCard>
                </motion.div>
              </Grid>
            </AnimatePresence>
          </Grid>
        </Container>

        {/* Our Team section */}
        <Container sx={{ marginTop: '50px', marginBottom: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: '#004d40' }}>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TeamCard>
                  <img src="https://i.ibb.co/8497dFG/347547824-775456367490771-3282209338867769250-n-1.jpg" alt="Card Image 9" />
                  <TeamMemberOverlay>
                    <TeamMemberName variant="h5">Mohamed Hossam</TeamMemberName>
                    <TeamMemberRole>Software Engineer</TeamMemberRole>
                  </TeamMemberOverlay>
                </TeamCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TeamCard>
                  <img src="https://i.ibb.co/my78hqb/328657715-185478024242961-1279391309056413108-n.jpg" alt="Card Image 9" />
                  <TeamMemberOverlay>
                    <TeamMemberName variant="h5">Emad Abdelmajied</TeamMemberName>
                    <TeamMemberRole>Veterinarian & Food Science Specialist</TeamMemberRole>
                  </TeamMemberOverlay>
                </TeamCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <footer>
          <Container sx={{ textAlign: 'center', padding: '30px' }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Contact us at info@foodiehub.com or +1 123-456-7890
            </Typography>
          </Container>
        </footer>
      </motion.div>
    </WhiteBackground>
  );
};

export default LandingPage;
