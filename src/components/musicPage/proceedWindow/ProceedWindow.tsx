import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import type { SxProps } from "@mui/system";
import type { MusicItem } from "../musicPageCommon";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import BuyPanel from "./BuyPanel";
import { useWindowSize } from "react-use";
import { handleCheckout, type BuyFormData } from "./proceedCommon";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  isMobile: boolean;
}

type ProceedWindowProps = {
  initialTab: number;
  track: MusicItem;
};

const ProceedWindow: React.FC<ProceedWindowProps> = ({ initialTab, track }) => {
  return <FloatingActionButtonZoom initialTab={initialTab} track={track} />;
};

export default ProceedWindow;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const tabPanelHeight = props.isMobile ? 400 : 330;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
      style={{ minHeight: tabPanelHeight }}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            pb: 2,
            minHeight: tabPanelHeight,
            height: tabPanelHeight,
          }}
        >
          {children}
        </Box>
      )}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

const FloatingActionButtonZoom: React.FC<ProceedWindowProps> = ({
  initialTab,
  track,
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(initialTab);

  const { width } = useWindowSize();
  const isMobile = width < 992;

  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const { control, handleSubmit, reset } = useForm<BuyFormData>({
    defaultValues: { email: "" },
  });

  const mutation = useMutation({
    mutationFn: handleCheckout,
    onSuccess: () => {
      // setNotification({
      //   isOpen: true,
      //   type: "success",
      //   alert: "Your message has been sent successfully!",
      // });
      reset();
    },
    onError: (err: any) => {
      // setNotification({
      //   isOpen: true,
      //   type: "error",
      //   alert: "Something went wrong with message delivery.",
      // });
      console.log(err);
    },
  });
  const onSubmit = (data: BuyFormData) => {
    mutation.mutate({ id: track._id, email: data.email });
  };
  const fabs = [
    {
      color: "primary" as "primary",
      sx: fabGreenStyle as SxProps,
      icon: <ShoppingCartIcon />,
      label: "Shop",
    },
    {
      color: "secondary" as const,
      sx: fabStyle as SxProps,
      icon: <EditIcon />,
      label: "Edit",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: isMobile ? "100%" : 500,
        position: "relative",
        minHeight: isMobile ? 450 : 380,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Edit" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        isMobile={isMobile}
      >
        <BuyPanel track={track} control={control} isMobile={isMobile} />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
        isMobile={isMobile}
      >
        Item Two
      </TabPanel>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab
            sx={fab.sx}
            aria-label={fab.label}
            color={fab.color}
            onClick={handleSubmit(onSubmit)}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
};
