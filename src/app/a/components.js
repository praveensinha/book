"use client";
import Script from 'next/script';
import parse from 'html-react-parser';

import { useState, useEffect } from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Modal({ e }) {
    const { data, error, isLoading } = useSWR(`/data/arrays.txt`, fetcher)

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const exampleModal = document.getElementById('dModal')
        exampleModal.addEventListener('show.bs.modal', async event => {
            const button = event.relatedTarget
            const _size = button.getAttribute('_size')
            const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            modalDialog.remove('modal-sm')
            modalDialog.remove('modal-lg')
            modalDialog.remove('modal-xl')
            modalDialog.remove('modal-fullscreen')
            modalDialog.add(_size)
        })
    }, [])

    return (
        <div className="modal" id="dModal" tabIndex="-1" aria-labelledby="dModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header shadow-sm">
                        <h1 className="modal-title fs-5" id="dModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {JSON.stringify(data)}
                    </div>
                    <div className="modal-footer py-0">
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-xl" >modal-xl</button>
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-lg" >modal-lg</button>
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#dModal" _size="modal-fullscreen" >modal-fullscreen</button>
                        <button type="button" className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#dOffcanvas" aria-controls="offcanvasExample">
                            Button with data-bs-target
                        </button>
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-sm btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Offcanvas() {
    const [_e, setE] = useState(null);

    const { data, error, isLoading } = useSWR(_e ? `/a/e/${_e}` : null, fetcher)

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const dOffcanvas = document.getElementById('dOffcanvas')
        dOffcanvas.addEventListener('show.bs.offcanvas', async event => {
            const button = event.relatedTarget
            const _e = button.getAttribute('_e')
            setE(_e)
            //const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            //modalDialog.remove('modal-sm')
            //modalDialog.remove('modal-lg')
            //modalDialog.remove('modal-xl')
            //modalDialog.add(_size)
        })
    }, [])

    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="dOffcanvas" aria-labelledby="offcanvasExampleLabel">
            {
                isLoading ? (
                    <div class="position-relative h-100 w-100">
                        <div class="position-absolute top-50 start-50 translate-middle">
                            <div class="spinner-border" role="status">
                            </div>
                        </div>
                    </div>
                ) :
                    (<><div className="offcanvas-header border-bottom bg-light shadow-sm">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">{data?.hTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                        <div className="offcanvas-body">
                            {parse(data?.htmlStr ?? '')}
                        </div></>)
            }

        </div>
    )
}

export function Profile() {

    const { data, error, isLoading } = useSWR(`/a/fun/objdata/?i=659969f04b6b449e3f533b73`, fetcher)

    const operationTab = data?.operation?.map(op =>
        <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            {op.name}
        </button>
    )

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const profileModal = document.getElementById('profileModal')
        profileModal.addEventListener('show.bs.modal', async event => {
            const button = event.relatedTarget
            const _i = button.getAttribute('_i')
            //const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            //modalDialog.remove('modal-sm')
            //modalDialog.remove('modal-lg')
            //modalDialog.remove('modal-xl')
            //modalDialog.add(_size)
        })

    }, [])


    useEffect(() => {

        const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
        tabEl?.addEventListener('shown.bs.tab', event => {
            event.target // newly activated tab
            event.relatedTarget // previous active tab
            alert(1)
        })

    }, [data?.operation])


    return (

        <div className="modal" id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-xl">
                <div className="modal-content">

                    <div className="modal-body px-0 py-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6><span className="badge bg-primary">INFO</span></h6>
                                            <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">Geneva D. McKnight</span></p>
                                            <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">(123) 123 1234</span></p>
                                            <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2">user@email.domain</span></p>
                                            <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ms-2">USA</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="card mb-3">
                                        <div className='card-header shadow-sm pb-0'>
                                            <h6 className='sticky-top'><span className="badge bg-primary">Opration</span></h6>
                                            <nav className=''>
                                                <div className="nav nav-underline" id="operationsTab" role="tablist">
                                                    {data?.operation?.map(op =>
                                                        <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                                            {op.name}
                                                        </button>)}
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="card-body">




                                            <div className="tab-content" id="operationsTabContent">
                                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">...</div>
                                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">...</div>
                                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">...</div>
                                                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">...</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-body">
                                            <div>
                                                <h5 className='sticky-top'><span className="badge bg-primary">Feed\s</span></h5>
                                                <h4 className="card-title mb-4">Work Experince</h4>
                                                {JSON.stringify(data ?? {})}
                                                <ul className="list-unstyled work-activity mb-0">
                                                    <li className="work-item" data-date="2020-21">
                                                        <h6 className="lh-base mb-0">ABCD Company</h6>
                                                        <p className="font-size-13 mb-2">Web Designer</p>
                                                        <p>To achieve this, it would be necessary to have uniform grammar, and more common words.</p>
                                                    </li>
                                                    <li className="work-item" data-date="2019-20">
                                                        <h6 className="lh-base mb-0">XYZ Company</h6>
                                                        <p className="font-size-13 mb-2">Graphic Designer</p>
                                                        <p className="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                                                    </li>

                                                    <li className="work-item" data-date="2019-20">
                                                        <h6 className="lh-base mb-0">XYZ Company</h6>
                                                        <p className="font-size-13 mb-2">Graphic Designer</p>
                                                        <p className="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                                                    </li>

                                                    <li className="work-item" data-date="2019-20">
                                                        <h6 className="lh-base mb-0">XYZ Company</h6>
                                                        <p className="font-size-13 mb-2">Graphic Designer</p>
                                                        <p className="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                                                    </li>
                                                    <li className="work-item" data-date="2019-20">
                                                        <h6 className="lh-base mb-0">XYZ Company</h6>
                                                        <p className="font-size-13 mb-2">Graphic Designer</p>
                                                        <p className="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                                                    </li>
                                                    <li className="work-item" data-date="2019-20">
                                                        <h6 className="lh-base mb-0">XYZ Company</h6>
                                                        <p className="font-size-13 mb-2">Graphic Designer</p>
                                                        <p className="mb-0">It will be as simple as occidental in fact, it will be Occidental person, it will seem like simplified.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Script onReady={() => { }} strategy="lazyOnload" >``</Script>

        </div>
    )
}

export function Relation() {

    const { data, error, isLoading } = useSWR(`/data/arrays.txt`, fetcher)

    useEffect(() => {

        //const _r = await fetch(`/r/${rId}/_s/?_do=get&get=item&id=10`, { method: 'GET' });

        const profileModal = document.getElementById('relation')
        profileModal.addEventListener('loadRelation', async event => {
            document.getElementById("relation").style.display = "block";
            console.log('event.e', event, event.detail)
            //const button = event.relatedTarget
            //const _i = button.getAttribute('_i')
            //const modalDialog = exampleModal.querySelector('.modal-dialog').classList
            //modalDialog.remove('modal-sm')
            //modalDialog.remove('modal-lg')
            //modalDialog.remove('modal-xl')
            //modalDialog.add(_size)
        })
    }, [])

    var a = []
    for (let index = 0; index < 10; index++) {
        a.push(
            <div className="list-group-item list-group-item-action" type="button" data-bs-toggle="modal" data-bs-target="#profileModal" _size="modal-xl">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </div>
        )
    }
    const close = () => {
        document.getElementById("relation").style.display = "none";
    }
    return (
        <div id="relation" className="overlay">
            <div className='d-flex' >

                <div className="d-flex flex-column vh-100 border-end pt-5">
                    <div className="overflow-y-auto">
                        <div className="list-group list-group-flush">
                            <div className=" px-3 py-2 sticky-top bg-transparent shadow-sm" >
                                <h3 className=''>
                                    <span className="badge bg-primary shadow-lg">Contact</span>
                                    <span type="button" onClick={close} className="ms-auto badge bg-danger float-end">X</span>
                                </h3>
                            </div>
                            {a}
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-stretch vh-100 border-end">
                    <div className="flex-grow-0 py-3 px-4 bg-dark-subtle">
                        <h5 className=''><span className="badge bg-primary">Lead</span></h5>

                        <div className='d-flex' >
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Name/Email/Phone" />
                                <button className="btn btn-primary">Send</button>
                            </div>
                            <button className='btn btn-danger btn-sm ms-2'>X</button>
                        </div>
                    </div>
                    <div className="align-self-stretch overflow-y-auto">
                        <div className="list-group list-group-flush">
                            {a}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}



