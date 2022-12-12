import { Box, Button, Typography } from '@mui/material';
import { IconListDetails } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Ad, useAd } from '../Context/AdContextProvider';
import { useUser } from '../Context/UserContextProvider';
import Protected from '../Protected';
import AdCard from '../shared/AdCard';
import ContentContainer from '../shared/ContentContainer';

const MyPage = () => {
  const navigate = useNavigate();
  const {
    adsFromCurrentUser,
    generateAcceptedReq,
    generatePendingReq,
    generateRejectedReq,
    generateSentRequests,
  } = useAd();
  const { handleSignOut } = useUser();
  const { currentUser } = useUser();

  return (
    <Protected>
      <ToastContainer />
      <ContentContainer background="#F5F5F5">
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              placeItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography component="h1" variant="h3" mb={-1} fontWeight={600}>
                Hej {currentUser?.displayName}!
              </Typography>

              <Button variant="contained" onClick={handleSignOut}>
                Logga ut
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h3" component="h2" textAlign="center" mb={1}>
              Skickade bokningsförfrågningar ({generateSentRequests().length})
            </Typography>

            <Box
              height={170}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!generateSentRequests().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inte skickat en bokningsförfrågning ännu.
                </Typography>
              ) : (
                generateSentRequests().map((req: Ad, index: number) => (
                  <AdCard
                    hideButtons
                    key={index}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ad={req!}
                    isRequest
                  />
                ))
              )}
            </Box>
          </Box>
          <Typography variant="h3" component="h2" textAlign="center">
            Hantera annonser
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h3" variant="h4" mb={-1}>
              Väntande bokningsförfrågningar ({generatePendingReq().length})
            </Typography>
            <Box
              height={190}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!generatePendingReq().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga väntande bokningsförfrågningar att visa.
                </Typography>
              ) : (
                generatePendingReq().map((req: Ad, index: number) => (
                  <AdCard
                    key={index}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ad={req!}
                    isRequest
                  />
                ))
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h3" variant="h4" mb={-1}>
              Accepterade bokningsförfrågningar ({generateAcceptedReq().length})
            </Typography>
            <Box
              height={170}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!generateAcceptedReq().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga accepterade bokningsförfrågningar att visa.
                </Typography>
              ) : (
                generateAcceptedReq().map((req: Ad, index: number) => (
                  <AdCard
                    hideButtons
                    key={index}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ad={req!}
                    isRequest
                  />
                ))
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component="h3" variant="h4" mb={-1}>
              Avvisade bokningsförfrågningar ({generateRejectedReq().length})
            </Typography>
            <Box
              height={170}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!generateRejectedReq().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga avvisade bokningsförfrågningar att visa.
                </Typography>
              ) : (
                generateRejectedReq().map((req: Ad, index: number) => (
                  <AdCard
                    hideButtons
                    key={index}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ad={req!}
                    isRequest
                  />
                ))
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                placeItems: 'center',
                gap: 1,
              }}
            >
              <Typography component="h3" variant="h4">
                Mina annonser ({adsFromCurrentUser().length})
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate(`/profile/${currentUser?.uid}`)}
                sx={{
                  background: 'none',
                  color: '#5D6DD8',
                  '&:hover': { background: 'none', color: '#3335A7' },
                  gap: 0.8,
                }}
              >
                <IconListDetails size="16" style={{ color: '#5D6DD8' }} />
                Visa min annonssida
              </Button>
            </Box>
            <Box
              height={190}
              columnGap={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {!adsFromCurrentUser().length ? (
                <Typography alignSelf="center" mx="auto">
                  Du har inga annonser att visa.
                </Typography>
              ) : (
                adsFromCurrentUser().map((ad: Ad, index: number) => (
                  <AdCard key={index} ad={ad} />
                ))
              )}
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </Protected>
  );
};

export default MyPage;
