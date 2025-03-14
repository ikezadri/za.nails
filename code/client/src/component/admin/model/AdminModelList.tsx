import { useEffect, useState } from "react";
import type Model from "../../../model/model";
import ModelAPI from "../../../service/model_api";
import { Link } from "react-router-dom";

const AdminModelList = () => {
	const [models, setModels] = useState<Model[]>([]);

	useEffect(() => {
		new ModelAPI().selectAll().then((response) => setModels(response.data));
	}, []);

	return (
		<>
			<h2>Model list</h2>

			<p>
				<Link to={"/admin/model/form"}>Create</Link>
			</p>

			<table>
				<tr>
					<th>Name</th>
					<th>Image</th>
					<th>Types</th>
					<tr />
				</tr>

				{models.map((model) => (
					<tr key={Math.random()}>
						{model.name}
						<td>{model.name}</td>
						<td>{model.image}</td>
						<td>{model.type}</td>
						<td>
							<Link to={""}>Update</Link>
							<Link to={""}>Delete</Link>
						</td>
					</tr>
				))}
			</table>
		</>
	);
};

export default AdminModelList;
