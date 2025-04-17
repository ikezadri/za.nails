import { useForm } from "react-hook-form";
import type Model from "../../../model/model";
import ModelAPI from "../../../service/model_api";
import { useContext, useEffect } from "react";
import TypesAPI from "../../../service/types_api";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../provider/UserProvider";
import SecurityAPI from "../../../service/security_api";
import style from "../../../assets/css/admin.modelForm.module.css";

const AdminModelForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<Model>();

	const navigate = useNavigate();
	const { id } = useParams();
	const { user } = useContext(UserContext);

	useEffect(() => {
		Promise.allSettled([
			new TypesAPI().selectAll(),
			id ? new ModelAPI().selectOne(id as unknown as number) : null,
		]).then((responses) => {
			if (responses[0].status === "fulfilled") {
				// setTypes(responses[0].value.data);
			}
			if (id && responses[1].status === "fulfilled") {
				reset({
					...responses[1].value.data,
					type_id: responses[1].value.data.type_id.split(","),
				});
			}
		});
	}, [id, reset]);

	const onSubmitModel = async (values: Model) => {
		const formData = new FormData();
		formData.append("id", values.id.toString());
		formData.append("name", values.name);
		formData.append("image", values.image[0]);
		formData.append("type_ids", values.type_ids);

		const auth = await new SecurityAPI().auth(user);

		const request = id
			? await new ModelAPI().update(formData, auth.data.token)
			: await new ModelAPI().insert(formData, auth.data.token);

		if ([200, 201].includes(request.status)) {
			navigate("/admin/model");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmitModel)}
			encType="multipart/form-data"
			className={style.form}
		>
			<p className={style.formGroup}>
				<label htmlFor="name" className={style.label}>Nom:</label>
				<input
					type="text"
					{...register("name", {
						required: "Nom requis",
						minLength: {
							value: 2,
							message: "Nom trop court",
						},
					})}
					className={style.input}
				/>
				<small className={style.error}>{errors.name?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor="image" className={style.label}>Modèle:</label>
				<input
					type="file"
					{...register(
						"image",
						id
							? {}
							: {
									required: "Modèle requis",
								}
					)}
					className={style.input}
				/>
				<small className={style.error}>{errors.image?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor="type_ids" className={style.label}>Type:</label>
				<div className={style.checkboxGroup}>
					<label className={style.checkbox}>
						<input type="checkbox" value="1" {...register("type_ids")} />
						Capsules
					</label>
					<label className={style.checkbox}>
						<input type="checkbox" value="2" {...register("type_ids")} />
						Manucure
					</label>
				</div>
				<small className={style.error}>{errors.type_ids?.message}</small>
			</p>

			<p>
				<input type="hidden" {...register("id")} value={id} />
				<button type="submit" className={style.submit}>Submit</button>
			</p>
		</form>
	);
};

export default AdminModelForm;
