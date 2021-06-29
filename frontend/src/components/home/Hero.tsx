import { Box, Button, Container, createStyles, Grid, Hidden, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Animation from '../../assets/Animation'
import Waves from '../../assets/Waves'

const useStyles = makeStyles((theme: Theme) => createStyles({
  heroContainer: {
    height: "calc(100vh - 300px)",
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: "6.5rem",
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      textAlign: "center"
    },
  },
  heroSubTitle: {
    fontSize: "1.55rem",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "1.2rem",
      marginBottom: "2rem"
    },
  },
  startBtn: {
    fontSize: "1.3rem",
    fontWeight: 700,
    letterSpacing: "2px",
    textShadow: "0 3px 5px 2px rgba(0,0,0,0.5)",
    padding: ".7rem",
    background: "#2229",
    color: "#FFF",
    width: 200,
    alignSelf: "center",
    margin: "2rem 2rem 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem auto !important"
    },
    transition: ".3s background"
  },
  registerBtn: {
    background: "#56B",
    "&:hover": {
      background: "#34B",
      transition: ".3s background"
    }
  },
  heroAction: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  actionBtns: {
    maxWidth: "300px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto !important"
    },
  },
  footer: {
    position: "fixed",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#888",
    fontWeight: 500
  }
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Box className={classes.heroContainer}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            delay: 2.2
          }}
        >
          <Waves />
        </motion.div>
        <Box mt={5}></Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, position: 'relative', bottom: -150 }}
              animate={{ opacity: 1, bottom: -10 }}
              transition={{
                type: 'spring',
                delay: 1.6,
                stiffness: 50,
                duration: 0.21,
              }}
              className={classes.heroTitle}
            >Remedy</motion.div>
            <motion.div
              initial={{ opacity: 0, position: 'relative', bottom: -150 }}
              animate={{ opacity: 1, bottom: -10 }}
              transition={{
                type: 'spring',
                delay: 1.9,
                stiffness: 50,
                duration: 0.21,
              }} className={classes.heroSubTitle}>Chat, Meet people, Join Groups, Discuss, Network, Explore and much more.. </motion.div>
            <motion.div
              initial={{ opacity: 0, position: 'relative', left: -60 }}
              animate={{ opacity: 1, left: 0 }}
              transition={{ type: 'spring', delay: 2.1, stiffness: 100 }}
              className={classes.heroAction}>
              <motion.div
                initial={{ opacity: 0, position: 'relative', left: -60 }}
                animate={{ opacity: 1, left: 0 }}
                transition={{ type: 'spring', delay: 2.4, stiffness: 100 }}
                className={classes.actionBtns}
              >
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  className={classes.startBtn}
                >
                  Login
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, position: 'relative', left: -60 }}
                animate={{ opacity: 1, left: 0 }}
                transition={{ type: 'spring', delay: 2., stiffness: 100 }}
                className={classes.actionBtns}
              >
                <Button
                  variant="contained"
                  disableElevation
                  fullWidth
                  size="large"
                  className={clsx(classes.startBtn, classes.registerBtn)}
                >
                  Register
              </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Hidden >
            <Grid item xs={12} md={6}>
              <Animation />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      <Box className={classes.footer}>Copyright &copy; Remedy,  {new Date().getFullYear()}</Box>
    </Box >
  )
}

export default Hero
