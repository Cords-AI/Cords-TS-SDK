type LocalizedFieldType = {
    en: string;
    fr: string;
};
type ResourceAddressType = {
    street1: string;
    street2: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    lat: number | null;
    lng: number | null;
};
type ResourceBodyType = {
    fees: string;
    hours: string;
    topics: string;
    twitter: string | null;
    youtube: string | null;
    facebook: string | null;
    linkedin: string | null;
    instagram: string | null;
    languages: string;
    eligibility: string;
    recordOwner: string;
    accessibility: string;
    documentsRequired: string;
    applicationProcess: string;
};
type ResourceType = {
    id: string;
    name: LocalizedFieldType;
    description: LocalizedFieldType;
    website: LocalizedFieldType;
    email: LocalizedFieldType;
    address: ResourceAddressType;
    addresses: ResourceAddressType[];
    phoneNumbers: {
        phone: string;
        name: string;
        type: string;
    }[];
    partner: string;
    delivery: "national" | "provincial" | "local" | "regional" | null;
    body: {
        en: ResourceBodyType | null;
        fr: ResourceBodyType | null;
    };
};
type SearchOptions = {
    lat: number;
    lng: number;
    page?: number;
    distance?: number;
    pageSize?: number;
    filter?: {
        "211"?: boolean;
        mentor?: boolean;
        prosper?: boolean;
        magnet?: boolean;
    };
};
type CordsError = {
    detail: string;
    status: number;
    title: string;
    type: string;
};

declare const ResourceOptions: {};
declare const CordsAPI: ({ apiKey }: {
    apiKey: string;
}) => {
    search: (q: string, options?: SearchOptions) => Promise<{
        data: ResourceType[];
        meta: {
            total: number;
            lat: number;
            lng: number;
        };
    }>;
    related: (id: string) => Promise<{
        data: ResourceType[];
    }>;
    resource: (id: string) => Promise<ResourceType>;
    resourceList: (ids: string[]) => Promise<{
        data: ResourceType[];
    }>;
    nearestNeighbour: (id: string, options: {
        lat: number;
        lng: number;
    }) => Promise<{
        data: ResourceType[];
    }>;
};
declare const formatServiceAddress: (address: ResourceAddressType) => string;

export { CordsAPI, type CordsError, type ResourceAddressType, type ResourceBodyType, ResourceOptions, type ResourceType, type SearchOptions, formatServiceAddress };
