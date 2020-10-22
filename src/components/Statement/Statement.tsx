import React, { useState, useEffect, memo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useAuthContext } from "../../context/Auth";
import { GetStatement } from "../../services/User/User";
import "./Statement.scss";
import { formatCurrency } from "../../utils/formaters/formaters";

interface IProps {}

function Statement(props: IProps) {
  const { userInfo } = useAuthContext();
  const [statement, setStatement] = useState<IStatement[]>([]);

  type Order = "asc" | "desc";

  useEffect(() => {
    async function getDataFn() {
      const resultStatement = await GetStatement(userInfo.hash || "");
      console.log("resultStatement", resultStatement);
      setStatement(resultStatement);
    }
    getDataFn();
  }, [userInfo]);

  let bankPostList = statement
    .sort((a, b) => {
      if (a.horarioOperacao < b.horarioOperacao) return 1;
      else if (a.horarioOperacao > b.horarioOperacao) return -1;
      return 0;
    })
    .map((bankPost, index) => (
      <TableRow key={index + bankPost.hash}>
        <TableCell align="left">{bankPost.debitCredit}</TableCell>
        <TableCell align="center">{bankPost.horarioOperacao}</TableCell>
        <TableCell align="right">{formatCurrency(bankPost.valorOperacao)}</TableCell>
      </TableRow>
    ));

  return (
    <TableContainer>
      <Table className="statement" aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Bank posting</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{bankPostList}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default memo(Statement);