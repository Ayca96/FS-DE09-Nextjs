import TeamList from "@/components/TeamList";
import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

const Team = async () => {
  //? bu sayede serverda data fetch işlemi serverda gerçekleşti ve cliente data fetch edilmiş olarak geldi
  const users = await getUsers();
  console.log(users);
  return <div>
    <h1>Team List</h1>
    <TeamList users={users} />
  </div>;
};

export default Team;
