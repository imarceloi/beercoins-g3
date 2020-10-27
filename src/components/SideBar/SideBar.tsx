import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { SwapHoriz,SwapVert, AttachMoney } from "@material-ui/icons";
import { useAuthContext } from "../../context/Auth";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const drawerWidth = 210;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "#03185a",
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      backgroundColor: "#03185a",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 0.5),
      ...theme.mixins.toolbar,
    },
    icon: {
      minWidth: theme.spacing(5),
    },
  })
);

interface IProps {
  moderator: IRoles;
}

const SideBar = (props: IProps) => {
  const { moderator: typeUserProps } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { signOut } = useAuthContext();

  const menuSideaBar = [
    {
      id: 1,
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
      userType: typeUserProps,
    },
    {
      id: 2,
      text: "Operações",
      icon: <SwapVert />,
      link: "/operations",
      userType: "ROLE_MODERATOR",
    },
    {
      id: 3,
      text: "Mudar Permissões",
      icon: <SwapHoriz />,
      link: "/role-change",
      userType: "ROLE_MODERATOR",
    },
    {
      id: 4,
      text: "Pagamentos",
      icon: <AttachMoney />,
      link: "/payments",
      userType: "ROLE_USER",
    },
  ];

  return (
    <div className={(classes.root, "sidebar")}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <ChevronLeftIcon className="sidebar-open-close" />
            ) : (
              <ChevronRightIcon className="sidebar-open-close" />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuSideaBar.map((item, index) => {
            const { text, id, icon, link, userType } = item;
            if (userType === typeUserProps) {
              return (
                <ListItem key={id} component={NavLink} exact={true} activeClassName="is-active" to={link} button>
                  <ListItemIcon className={clsx(classes.icon, "sidebar-icon")}>{icon}</ListItemIcon>
                  <ListItemText className="sidebar-text" primary={text} />
                </ListItem>
              );
            }
            return "";
          })}
          <ListItem component={Link} to="/login" onClick={() => signOut()} button>
            <ListItemIcon className={clsx(classes.icon, "sidebar-text")}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText className="sidebar-text">Sair</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};
export default SideBar;
