import MainTitle from "@/components/MainTitle";
import defaultUserImg from "../../../assets/imgs/default-user.png";
import { useAuthUser } from "@/features/auth";
import { formateDate } from "@/utils/formateDate";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import GeneralButton from "@/components/ui/GeneralButton";
import { useUpdateProfileForm } from "@/features/user/hooks/form/useUpdateProfileForm";
import { useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUpdatePasswordForm } from "@/features/user/hooks/form/useChangePassword";
import { useMemo } from "react";

export const ProfileSettings = () => {
	const { authUser } = useAuthUser();
	const { updateProfileForm, onUpdateProfile } = useUpdateProfileForm();
	const { updatePasswordForm, onUpdatePassword } = useUpdatePasswordForm();

	useEffect(() => {
		if (authUser) {
			updateProfileForm.reset(authUser);
		}
	}, []);

	if (!authUser) return;

	// Watch all form values
	const watchedValues = updateProfileForm.watch();

	// Check if the form values differ from the initial authUser values
	const isFormDirty = useMemo(() => {
		return (
			watchedValues.fullName !== authUser.fullName ||
			watchedValues.phoneNumber !== authUser.phoneNumber ||
			watchedValues.address !== authUser.address
		);
	}, [watchedValues, authUser]);

	return (
		<div className="flex-1 p-10">
			<div className="mb-10">
				<MainTitle title="Account settings" addClasses="!text-2xl" />
				<p className="mb-2 text-sm text-muted-foreground">
					Update your profile info.
				</p>
			</div>
			<div className="bg-[#f4f4f5] p-5 rounded-md">
				<Form {...updateProfileForm}>
					<form onSubmit={updateProfileForm.handleSubmit(onUpdateProfile)}>
						{/* PARENT BOX */}
						<div className="flex flex-col gap-10">
							{/* FIRST CHILD */}
							<div className="flex gap-10 items-center">
								<img
									src={defaultUserImg}
									className="size-28 p-2 border border-black rounded-[50%]"
									alt=""
								/>
								<div className="flex flex-col gap-2">
									<div className="font-[600] text-lg">{authUser.fullName}</div>
									<div className="text-sm text-gray-600">
										Joined {formateDate(authUser.createdAt)}
									</div>
								</div>
							</div>

							{/* SECOND CHILD */}
							<div className="flex flex-col gap-2">
								<h1 className="font-[600] text-xl">Profile Name</h1>
								<FormField
									control={updateProfileForm.control}
									name="fullName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Full name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* THIRD CHILD */}
							<div className="flex flex-col gap-2">
								<h1 className="font-[600] text-xl">General Info</h1>
								<FormField
									control={updateProfileForm.control}
									name="phoneNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone number</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Phone number" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={updateProfileForm.control}
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Address" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							{/* FOURTH CHILD */}
							<div className="flex flex-col gap-2">
								<h1 className="font-[600] text-xl">Security</h1>
								<FormField
									control={updateProfileForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Email" disabled />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div>
							<Form {...updatePasswordForm}>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" className="w-fit mt-2">
											Change Password
										</Button>
									</DialogTrigger>
									<DialogContent className="sm:max-w-[425px]">
										<DialogHeader>
											<DialogTitle>Change password</DialogTitle>
											<DialogDescription>
												Make changes to your password here. Click Update
												Password when you're done.
											</DialogDescription>
										</DialogHeader>
										<form
											onSubmit={updatePasswordForm.handleSubmit(
												onUpdatePassword
											)}
										>
											<div className="flex flex-col gap-10 py-4">
												<FormField
													control={updatePasswordForm.control}
													name="oldPassword"
													render={({ field }) => (
														<FormItem>
															<FormLabel>Old password</FormLabel>
															<FormControl>
																<Input {...field} placeholder="Old password" />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<div className="flex flex-col gap-10 py-4">
												<FormField
													control={updatePasswordForm.control}
													name="newPassword"
													render={({ field }) => (
														<FormItem>
															<FormLabel>New password</FormLabel>
															<FormControl>
																<Input {...field} placeholder="New password" />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											<DialogFooter>
												<Button type="submit">Update Password</Button>
											</DialogFooter>
										</form>
									</DialogContent>
								</Dialog>
							</Form>
						</div>
						<GeneralButton
							type="submit"
							title="Update profile"
							addClasses="mt-5 !text-sm border border-black"
							disabled={!isFormDirty} // Disable the button if the form is not dirty
						></GeneralButton>
					</form>
				</Form>
			</div>
		</div>
	);
};
