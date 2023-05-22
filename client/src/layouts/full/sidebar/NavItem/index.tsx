import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        // backgroundColor: theme.palette.primary.light,
        background:"linear-gradient(143deg, rgba(255,255,255,1) 0%, rgba(241,240,255,1) 50%, rgba(238,241,255,1) 100%)",
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        // backgroundColor: theme.palette.primary.main,
        background: "linear-gradient(90deg, rgba(88,78,255,0.9652193641128326) 0%, rgba(108,91,255,0.8839868711156338) 48%, rgba(96,110,255,1) 100%)",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));



  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href}
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? "_blank" : ""}
          onClick={onClick}


    
        >
          <ListItemIcon
            sx={{
              minWidth: "36px",
              p: "3px 0",
              color: "inherit",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
