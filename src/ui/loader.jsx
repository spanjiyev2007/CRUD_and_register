import { Skeleton } from "@mui/material"
import Stack from '@mui/material/Stack';

const Loader = () => {
    return (
        <div className="container mt-1">
            <p>Malumotlar yuklanmoqda biroz kutib turing...</p>
            {/* <div className="spinner-border d-block mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> */}
            <div className="row mt-5"> 
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
                <div className="col-4">
                    <Stack spacing={1}>
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rectangular" width={350} height={225} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                        <Skeleton sx={{ backgroundColor: '#55595c' }} variant="rounded" width={350} height={15} />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Loader
