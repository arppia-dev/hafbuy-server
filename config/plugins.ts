module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('DO_SPACE_BASE_URL'),
        rootPath: env('DO_SPACE_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          },
          region: env('DO_SPACE_REGION'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('DO_SPACE_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'no-reply@hafbuy.net',
        defaultReplyTo: 'no-reply@hafbuy.net',
      },
    },
  },

  'product-variants': {
    enabled: true,
    resolve: './src/plugins/product-variants',
  },

  'schemas-to-ts': {
    enabled: false,
    config: {
      acceptedNodeEnvs: ['development'],
      commonInterfacesFolderName: 'schemas-to-ts',
      verboseLogs: false,
      alwaysAddEnumSuffix: false,
    },
  },

  'email-designer': {
    enabled: true,
    config: {
      editor: {
        options: {
          features: {
            colorPicker: {
              presets: ['#1d1b84'],
            },
          },
        },
        appearance: {
          theme: 'dark',
        },
      },
    },
  },
})
