import React from "react";
import styled from "styled-components";
import LiftTable from "./LiftTable";

const Table = styled.table`
  border: 1px solid red;
  & > * {
    background-color: turquoise;
  }
`;

const Results = ({ state, lifts }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>
              <h2>Squat</h2>
            </th>
            <th>
              <h2>Bench</h2>
            </th>
            <th>
              <h2>Deadlift</h2>
            </th>
            <th>
              <h2>Press</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Training max:</p>
            </td>
            <td>
              <p>Training max:</p>
            </td>
            <td>
              <p>Training max:</p>
            </td>
            <td>
              <p>Training max:</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Week 1</h3>
            </td>
            <td>
              <h3>Week 1</h3>
            </td>
            <td>
              <h3>Week 1</h3>
            </td>
            <td>
              <h3>Week 1</h3>
            </td>
          </tr>
          <tr>
            <td>
              <p>First lift:</p>
            </td>
            <td>
              <p>First lift:</p>
            </td>
            <td>
              <p>First lift:</p>
            </td>
            <td>
              <p>First lift:</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Second lift:</p>
            </td>
            <td>
              <p>Second lift:</p>
            </td>
            <td>
              <p>Second lift:</p>
            </td>
            <td>
              <p>Second lift:</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Third lift:</p>
            </td>
            <td>
              <p>Third lift:</p>
            </td>
            <td>
              <p>Third lift:</p>
            </td>
            <td>
              <p>Third lift:</p>
            </td>
          </tr>
        </tbody>
      </Table>
      <LiftTable state={state} lifts={lifts} />
    </div>
  );
};

export default Results;
