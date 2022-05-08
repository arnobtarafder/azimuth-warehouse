import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Profile.css';

const Profile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const userSurname = user?.displayName.split(" ")[0]

    return (
        <section className='profile-section'>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5 mb-2" width="150px" src={
                                user ? user?.photoURL : "https://cdn-icons-png.flaticon.com/128/3237/3237472.png"} alt="Profile" /><span className="font-weight-bold">{user?.displayName}</span><span className="text-black-50"> {user?.email} </span><span> </span></div>
                    </div>

                    <div className="col-md-6 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 className="text-right  text-bolder fs-4 text-secondary text-bolder fs-4 text-secondary">Profile Settings</h3>
                            </div>

                            <div className="row mt-2 text-start">
                                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="profile-form-control form-control" placeholder="first name" value={user?.displayName} /></div>

                                <div className="col-md-12"><label className="labels">Surname</label><input type="text" className="profile-form-control form-control" value={userSurname} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Profile Image URL</label><input type="text" className="profile-form-control form-control" value={user?.photoURL} placeholder="surname" /></div>
                            </div>

                            <div className="row mt-2 text-start">

                                <div className="d-flex justify-content-between align-items-center mt-5 mb-2 information-headings">
                                    <h3 className="text-right  text-bolder fs-4 text-secondary">Token Information</h3>
                                </div>

                                <div className="col-md-12"><label className="labels">Access Token</label><input type="text" className="profile-form-control form-control" value={user?.accessToken} placeholder="access token" /></div>

                                <div className="col-md-12"><label className="labels">Expiration Time</label><input type="text" className="profile-form-control form-control" value={user?.stsTokenManager?.expirationTime} placeholder="expiration time" /></div>

                                <div className="col-md-12"><label className="labels">Refresh Token</label><input type="text" className="profile-form-control form-control" value={user?.stsTokenManager?.refreshToken} placeholder="surname" /></div>
                            </div>

                            <div className="row mt-2 text-start">

                                <div className="d-flex justify-content-between align-items-center mt-5 mb-2 information-headings">
                                    <h3 className="text-right  text-bolder fs-4 text-secondary">Meta Data Information</h3>
                                </div>

                                <div className="col-md-12"><label className="labels">Creation At</label><input type="text" className="profile-form-control form-control" value={user?.metadata?.createdAt} placeholder="access token" /></div>

                                <div className="col-md-12"><label className="labels">Creation Time</label><input type="text" className="profile-form-control form-control" value={user?.metadata?.creationTime} placeholder="expiration time" /></div>

                                <div className="col-md-12"><label className="labels">Last Sign In Time</label><input type="text" className="profile-form-control form-control" value={user?.metadata?.lastSignInTime} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Local Refresh At</label><input type="text" className="profile-form-control form-control" value={user?.reloadUserInfo?.lastRefreshAt} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Last Sign In Time</label><input type="text" className="profile-form-control form-control" value={user?.reloadUserInfo?.localId} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Error Back Off</label><input type="text" className="profile-form-control form-control" value={user?.proactiveRefresh?.errorBackoff} placeholder="surname" /></div>
                            </div>


                            <div className="row mt-2 text-start">

                                <div className="d-flex justify-content-between align-items-center mt-5 mb-2 information-headings">
                                    <h3 className="text-right  text-bolder fs-4 text-secondary">Authentication Information</h3>
                                </div>

                                <div className="col-md-12"><label className="labels">Component Name</label><input type="text" className="profile-form-control form-control" value={user?.auth?.heartbeatServiceProvider?.component?.name} placeholder="access token" /></div>

                                <div className="col-md-12"><label className="labels">Provider Name</label><input type="text" className="profile-form-control form-control" value={user?.providerId} placeholder="access token" /></div>

                                <div className="col-md-12"><label className="labels">User Key</label><input type="text" className="profile-form-control form-control" value={user?.userKey} placeholder="access token" /></div>

                                <div className="col-md-12"><label className="labels">API Key</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.apiKey} placeholder="expiration time" /></div>

                                <div className="col-md-12"><label className="labels">API Id</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.appId} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">UID</label><input type="text" className="profile-form-control form-control" value={user?.uid} placeholder="expiration time" /></div>

                                <div className="col-md-12"><label className="labels">Authentication Domain</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.authDomain} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Authentication Message Sender Id</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.messagingSenderId} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Project Id</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.projectId} placeholder="surname" /></div>

                                <div className="col-md-12"><label className="labels">Storage Bucket</label><input type="text" className="profile-form-control form-control" value={user?.auth?.app?._options?.storageBucket} placeholder="surname" /></div>
                            </div><br /><br />

                            <div className="row mt-3 text-start">
                                <div className="d-flex justify-content-between align-items-center mt-5 mb-2 information-headings">
                                    <h3 className="text-right  text-bolder fs-4 text-secondary">Personal Information</h3>
                                </div>

                                <div className="col-md-6"><label className="labels">Number</label><input type="number" className="profile-form-control form-control" placeholder={user?.phoneNumber ? user?.phoneNumber : "Mobile Number"} value="" /></div>

                                <div className="col-md-6"><label className="labels">Facebook Id</label><input type="text" className="profile-form-control form-control" placeholder="Facebook Id" value="" /></div>
                                
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="profile-form-control form-control" placeholder="Country" value="" /></div>

                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="profile-form-control form-control" value="" placeholder="State" /></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;