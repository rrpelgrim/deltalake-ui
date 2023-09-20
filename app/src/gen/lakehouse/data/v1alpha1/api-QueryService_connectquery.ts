// @generated by protoc-gen-connect-query v0.4.4 with parameter "target=ts,import_extension=none"
// @generated from file lakehouse/data/v1alpha1/api.proto (package lakehouse.data.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetSharingServerRequest, GetSharingServerResponse, ListSharingServersRequest, ListSharingServersResponse, QueryRequest, QueryResponse } from "./api_pb";
import { MethodKind } from "@bufbuild/protobuf";
import { createQueryService } from "@connectrpc/connect-query";

export const typeName = "lakehouse.data.v1alpha1.QueryService";

/**
 * @generated from service lakehouse.data.v1alpha1.QueryService
 */
export const QueryService = {
  typeName: "lakehouse.data.v1alpha1.QueryService",
  methods: {
    /**
     * Execute a query
     *
     * @generated from rpc lakehouse.data.v1alpha1.QueryService.Query
     */
    query: {
      name: "Query",
      I: QueryRequest,
      O: QueryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List all registered sharing servers
     *
     * @generated from rpc lakehouse.data.v1alpha1.QueryService.ListSharingServers
     */
    listSharingServers: {
      name: "ListSharingServers",
      I: ListSharingServersRequest,
      O: ListSharingServersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc lakehouse.data.v1alpha1.QueryService.GetSharingServer
     */
    getSharingServer: {
      name: "GetSharingServer",
      I: GetSharingServerRequest,
      O: GetSharingServerResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * Execute a query
 *
 * @generated from rpc lakehouse.data.v1alpha1.QueryService.Query
 */
export const query = createQueryService({
  service: QueryService,
}).query;

/**
 * List all registered sharing servers
 *
 * @generated from rpc lakehouse.data.v1alpha1.QueryService.ListSharingServers
 */
export const listSharingServers = createQueryService({
  service: QueryService,
}).listSharingServers;

/**
 * @generated from rpc lakehouse.data.v1alpha1.QueryService.GetSharingServer
 */
export const getSharingServer = createQueryService({
  service: QueryService,
}).getSharingServer;
