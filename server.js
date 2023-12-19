import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();


// Your Azure AD configuration
const clientId = 'b87e48d6-2c35-4937-aef2-ff5c3f68b01d';
const clientSecret = 'q_k8Q~CHceybU8IKX4mBD8~giVztSNAWwfZsPbbi';
const tenantId = 'fdc223cd-8687-48e5-b9e8-ad52f8adbdaa';

app.use(cors());

app.use(express.static('public'))


    app.get('/getAccessToken', async (req, res) => {
        const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

        console.log(req.query.username)
        console.log(req.query.password)


        const tokenRequestParams = new URLSearchParams();
        tokenRequestParams.append('grant_type', 'password');
        tokenRequestParams.append('client_id', clientId);
        tokenRequestParams.append('scope', 'https://graph.microsoft.com/.default');
        tokenRequestParams.append('client_secret', clientSecret);
        tokenRequestParams.append('username', req.query.username);
        tokenRequestParams.append('password', req.query.password);

        
        response = "ok"
            if (response == "ok") {
                const tokenData = await response.json();
                const accessToken = "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjFJR3FMeTlFQTFERGV0dy0xT1JKRnltbXplOWN3dVhfRHd1WmU2TlRuN00iLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZGMyMjNjZC04Njg3LTQ4ZTUtYjllOC1hZDUyZjhhZGJkYWEvIiwiaWF0IjoxNzAyNjQ0MzI5LCJuYmYiOjE3MDI2NDQzMjksImV4cCI6MTcwMjY0ODIyOSwiYWlvIjoiRTJWZ1lKajR0SDlXOVZlRnFKUFdUM2xNRDYxdEJ3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJJbnR1bmVfZXhwbG9yZSIsImFwcGlkIjoiYjg3ZTQ4ZDYtMmMzNS00OTM3LWFlZjItZmY1YzNmNjhiMDFkIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmRjMjIzY2QtODY4Ny00OGU1LWI5ZTgtYWQ1MmY4YWRiZGFhLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiOTNjODUxMGQtNTg5ZC00NTYwLTgxMmYtYTRkMTcyYjBjM2M3IiwicmgiOiIwLkFYd0F6U1BDX1llRzVVaTU2SzFTLUsyOXFnTUFBQUFBQUFBQXdBQUFBQUFBQUFCOEFBQS4iLCJyb2xlcyI6WyJEZXZpY2UuUmVhZC5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIlVzZXIuUmVhZC5BbGwiLCJEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZFdyaXRlLkFsbCIsIkdyb3VwTWVtYmVyLlJlYWRXcml0ZS5BbGwiLCJEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUHJpdmlsZWdlZE9wZXJhdGlvbnMuQWxsIiwiRGV2aWNlTWFuYWdlbWVudEFwcHMuUmVhZFdyaXRlLkFsbCIsIkRldmljZU1hbmFnZW1lbnRBcHBzLlJlYWQuQWxsIl0sInN1YiI6IjkzYzg1MTBkLTU4OWQtNDU2MC04MTJmLWE0ZDE3MmIwYzNjNyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJOQSIsInRpZCI6ImZkYzIyM2NkLTg2ODctNDhlNS1iOWU4LWFkNTJmOGFkYmRhYSIsInV0aSI6IkFaZDJSM25HNEVDbU1obzRCeElsQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfdGNkdCI6MTYxMjMwMTcyMX0.m41CbhBU8_YR3cjuRmoqDFql9lOJ30rdndo-kylLZBp-luQ6Opu03DSjbcK7-PcFhMkvjQ1cDEhXbFBR3IF-OrfqgSWQjSHpjhXJGRSPzelUCnBw6QAduvhc0aDYoOzpiOVW1W98ubfgg2PgHNoR46qPmlloWVm4lpCAytSArqFVRiSRiAMs6jZnT2xvnvbW695yWnJAvRcGM4Ec60OruULmvUQjrkpQUHRJAXlLhkTFb37Im8tUB-crPIxPFySdVLFv9Z6hz-KkugApfZO-QlNukvzyLZ3J_eDanzsP5tjF0ZH0TIUj7XBW8S5N6hwtz1yisCNGjXJ_hU9h54v3JA"

                const isUserAdmin = await checkGroupMembership(req.query.username, accessToken);

                if (isUserAdmin) {
                    // Retrieve the app access token
                    const appAuthToken = await authforApp(clientId, clientSecret, tenantId);

                    // Retrieve the recovery key
                    const recoveryKey = await authRecoveryKey(clientId, clientSecret, tenantId);

                    res.json({
                        access_token: accessToken,
                        isUserAdmin: isUserAdmin,
                        recoveryKey: recoveryKey,
                        authforApp: appAuthToken,
                    });
                } else {
                    res.status(403).json({ error: 'Access denied. User is not part of the admin group.' });
                }
            } else {
                if (response.status === 400) {
                    res.status(401).json({ error: 'Invalid credentials' });
                } else {
                    res.status(response.status).json({ error: 'Failed to obtain access token' });
                }
            }
        
    });

async function checkGroupMembership(username, accessToken) {
    // Define the API endpoint with the user's username
    const url = `https://graph.microsoft.com/v1.0/users/${username}/memberOf`;

    try {
        // Make a GET request to the API with the access token
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (response.ok) {
            const data = await response.json();

            // Define the target group name you want to check
            const targetGroupName = "becf745e-2def-4421-ae9f-63adc15a1dd6"; // Replace with the actual group name you want to check

            // Check if the target group is present in the response
            const isGroupPresent = data.value.some(group => group.id === targetGroupName);

            if (isGroupPresent) {
                return true;
            } else {
                return false;
            }
        } else {
            throw new Error(`HTTP Error: ${response.status}`);
        }
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}

async function authRecoveryKey(clientId, clientSecret, tenantId) {
    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

    // Define the request body for obtaining a token
    const authRequestBody = {
        grant_type: 'password',
        scope: 'https://graph.microsoft.com/.default',
        client_id: clientId,
        client_secret: clientSecret,
        username: 'nbhurli@stefaninidemo1.onmicrosoft.com',
        password: 'Stefanin!@123'
    };

    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(authRequestBody).toString(), // Ensure the body is URL-encoded
        });

        if (response.ok) {
            const authData = await response.json();

            if (authData.access_token) {
                return authData.access_token;
            } else {
                console.error('Error obtaining auth token:', authData.error_description);
                throw new Error('Error obtaining auth token: No access token found');
            }
        } else {
            console.error('Error obtaining auth token:', response.statusText);
            throw new Error('Error obtaining auth token: Bad response status');
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error obtaining auth token: Network error or other issue');
    }
}

async function authforApp(clientId, clientSecret, tenantId) {
    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

    // Define the request body for obtaining a token
    const authRequestBody = {
        grant_type: 'client_credentials',
        scope: 'https://graph.microsoft.com/.default',
        client_id: clientId,
        client_secret: clientSecret,
        tenant: tenantId
    };

    try {
        const response = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(authRequestBody).toString(), // Ensure the body is URL-encoded
        });

        if (response.ok) {
            const authData = await response.json();

            if (authData.access_token) {
                return authData.access_token;
            } else {
                console.error('Error obtaining auth token:', authData.error_description);
                throw new Error('Error obtaining auth token: No access token found');
            }
        } else {
            console.error('Error obtaining auth token:', response.statusText);
            throw new Error('Error obtaining auth token: Bad response status');
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error obtaining auth token: Network error or other issue');
    }
}

const PORT = process.env.PORT || 443;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
