import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import RoleAccountsService from "../../services/RoleAccounts/roleaccounts.service";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useToasts } from "react-toast-notifications";

interface IProps {
  account: IRoleAccount;
  setAccount(response: IRoleAccount[]): void;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const roleAccountsService = new RoleAccountsService();

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    padding: 20,
    minHeight: "30%",
    width: "35%",
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginTop: theme.spacing(4),
  },
  padd: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

interface IRole {
  [key: string]: string;
}

export default function SimpleModal(props: IProps) {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { id, nome, roles } = props.account;

  const getRole = (role: string): string => {
    const roles: IRole = { ROLE_MODERATOR: "Moderador", ROLE_USER: "Usuário" };
    return roles[role];
  };

  const getParsedOpositeRole = (role: string) => {
    switch (role) {
      case "ROLE_MODERATOR":
        return "Usuário";
      case "ROLE_USER":
        return "Moderador";
    }
  };

  const updateAccountList = () =>
    roleAccountsService
      .getAccounts()
      .then((response) => {
        props.setAccount(response);
        JSON.stringify(response);
      })
      .catch((error) => {
        addToast("Erro ao carregar a lista de contas", {
          appearance: "error",
        });
      });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const changeUserRole = () => {
    setLoading(true);

    const account: IUserRoleChangeDTO = {
      roleType: roles[0].name,
      userId: id,
    };

    roleAccountsService
      .changeRole(account)
      .then(() => {
        setLoading(false);
        updateAccountList();
        handleModalClose();

        addToast("Permissão de usuário alterada com sucesso!", {
          appearance: "success",
        });
      })
      .catch(() => {
        setLoading(false);

        addToast(
          "Ocorreu um erro ao tentar mudar a permissão de usuário. Por favor, tente novamente mais tarde.",
          {
            appearance: "error",
          }
        );
      });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <Typography component="h1" variant="h4" align="center">
          Mudar permissão de usuário
        </Typography>

        <p>
          {`Atualmente o usuário ${nome} possui permissão de`}{" "}
          <b>{`${getRole(roles[0].name)}`}</b>.
        </p>
        <p>
          {`Deseja mudar para`}{" "}
          <b>{`${getParsedOpositeRole(roles[0].name)}?`}</b>
        </p>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={changeUserRole}
          className={classes.button}
          disabled={loading}
        >
          Mudar Permissão
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Link color="primary" href="#" onClick={handleOpen}>
        Mudar Permissão
      </Link>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
