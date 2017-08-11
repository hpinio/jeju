var data = {
  "SecurityGroups": [{
      "IpPermissionsEgress": [],
      "Description": "default group",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "GroupName": "default",
            "UserId": "954911931766",
            "GroupId": "sg-f3b523c9"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "GroupName": "default",
            "UserId": "954911931766",
            "GroupId": "sg-f3b523c9"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": -1,
          "IpRanges": [],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": [{
            "GroupName": "default",
            "UserId": "954911931766",
            "GroupId": "sg-f3b523c9"
          }]
        }
      ],
      "GroupName": "default",
      "OwnerId": "954911931766",
      "GroupId": "sg-f3b523c9"
    },
    {
      "IpPermissionsEgress": [],
      "Description": "Runs the AWR Server",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 20,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "AWR-Public-Server",
      "OwnerId": "954911931766",
      "GroupId": "sg-63670259"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows access from the WORMLY servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
              "CidrIp": "178.79.181.14/32"
            },
            {
              "CidrIp": "184.72.226.23/32"
            },
            {
              "CidrIp": "184.73.218.144/32"
            },
            {
              "CidrIp": "192.81.220.154/32"
            },
            {
              "CidrIp": "54.252.87.165/32"
            },
            {
              "CidrIp": "66.246.75.38/32"
            },
            {
              "CidrIp": "69.164.195.159/32"
            },
            {
              "CidrIp": "74.207.230.51/32"
            },
            {
              "CidrIp": "74.82.3.54/32"
            }
          ],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8,
          "IpRanges": [{
              "CidrIp": "178.79.181.14/32"
            },
            {
              "CidrIp": "184.72.226.23/32"
            },
            {
              "CidrIp": "184.73.218.144/32"
            },
            {
              "CidrIp": "192.81.220.154/32"
            },
            {
              "CidrIp": "54.252.87.165/32"
            },
            {
              "CidrIp": "66.246.75.38/32"
            },
            {
              "CidrIp": "69.164.195.159/32"
            },
            {
              "CidrIp": "74.207.230.51/32"
            },
            {
              "CidrIp": "74.82.3.54/32"
            }
          ],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "LIVE-WormlySensors",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-0149a764"
    },
    {
      "IpPermissionsEgress": [{
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        }
      ],
      "Description": "File Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-ee688f81"
          }]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
              "CidrIp": "10.0.0.0/24"
            },
            {
              "CidrIp": "10.0.3.0/24"
            }
          ],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 22,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-fa736096"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "FILESERVERS",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-034f5c6f"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows access to the staging servers from maxasp servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 20,
          "IpRanges": [{
              "CidrIp": "203.59.97.85/32"
            },
            {
              "CidrIp": "209.162.190.20/32"
            },
            {
              "CidrIp": "74.81.214.193/32"
            }
          ],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 1024,
          "IpRanges": [{
              "CidrIp": "203.59.97.85/32"
            },
            {
              "CidrIp": "209.162.190.20/32"
            },
            {
              "CidrIp": "74.81.214.193/32"
            }
          ],
          "ToPort": 1048,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Staging-MaxASP-RemoteAccess",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-06a2b064"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allow file sharing access from the clue office",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 445,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 445,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Staging-RemoteSmb",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-0d8a996f"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Test Load Balancer",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "GroupName": "Test Load Balancer",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-10415572"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "default VPC security group",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "GroupName": "default",
      "VpcId": "vpc-f10b3f98",
      "OwnerId": "954911931766",
      "GroupId": "sg-22ef0a4d"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows inbound connects to rabbitmq cluster from VPC network computers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 4396,
          "IpRanges": [{
              "CidrIp": "10.0.10.0/24"
            },
            {
              "CidrIp": "10.0.12.0/24"
            }
          ],
          "ToPort": 4396,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 25672,
          "IpRanges": [{
              "CidrIp": "10.0.10.0/24"
            },
            {
              "CidrIp": "10.0.12.0/24"
            }
          ],
          "ToPort": 25672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-3120de54"
          }],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 5672,
          "IpRanges": [{
              "CidrIp": "10.0.10.0/24"
            },
            {
              "CidrIp": "10.0.12.0/24"
            }
          ],
          "ToPort": 5672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 15672,
          "IpRanges": [{
              "CidrIp": "10.0.10.0/24"
            },
            {
              "CidrIp": "10.0.12.0/24"
            }
          ],
          "ToPort": 15672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "STAGING-RabbitMQ-Cluster",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-3120de54"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Mintox Frontend Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-4f04442a"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-864e5dea"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 81,
          "IpRanges": [],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-864e5dea"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-fa736096"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-fa736096"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-354f5c59"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "MintoxFrontendServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-354f5c59"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Mintox Database Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 7800,
          "IpRanges": [],
          "ToPort": 7801,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-ee5e3b8b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            }
          ]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 9800,
          "IpRanges": [],
          "ToPort": 9800,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 5672,
          "IpRanges": [],
          "ToPort": 5672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 8082,
          "IpRanges": [{
              "CidrIp": "172.16.0.0/24"
            },
            {
              "CidrIp": "192.168.0.0/24"
            }
          ],
          "ToPort": 8082,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": -1,
          "IpRanges": [{
            "CidrIp": "10.0.0.0/16"
          }],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "MintoxDatabaseServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-374f5c5b"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Load Testing Servers",
      "IpPermissions": [{
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-414fa82e"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-ee688f81"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-cb41a6a4"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
            "CidrIp": "10.0.0.0/16"
          }],
          "ToPort": 135,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "LoadTestingServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-414fa82e"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging web load balancer",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8080,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 8080,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "StagingFrontendLoadBalancers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-42869620"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "This security group was generated by AWS Marketplace and is based on recommended settings for Cloud Hosted Router version 6.34.1 provided by MikroTik",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 22,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Cloud Hosted Router-6-34-1-AutogenByAWSMP-",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-44da3e22"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging admin load balancers ",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "StagingBackendLoadBalancers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-46869624"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "default VPC security group",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [],
        "UserIdGroupPairs": [{
          "UserId": "954911931766",
          "GroupId": "sg-487e9a2e"
        }],
        "PrefixListIds": []
      }],
      "GroupName": "default",
      "VpcId": "vpc-decb8dba",
      "OwnerId": "954911931766",
      "GroupId": "sg-487e9a2e"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows access to sftp service from clue office",
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 22,
        "IpRanges": [{
          "CidrIp": "192.168.0.0/24"
        }],
        "ToPort": 22,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "SFTP Remote Access",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-4a963d2d"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Proxy Servers For Mintox Frontend Requests",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 81,
          "IpRanges": [],
          "ToPort": 81,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-864e5dea"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-864e5dea"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 82,
          "IpRanges": [],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-864e5dea"
          }]
        }
      ],
      "GroupName": "MintoxFrontendProxies",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-4f04442a"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "HIF SFTP Server",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
              "CidrIp": "54.206.21.32/32"
            },
            {
              "CidrIp": "54.206.66.121/32"
            }
          ],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
            "CidrIp": "54.252.131.105/32"
          }],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 2000,
          "IpRanges": [{
            "CidrIp": "54.206.64.252/32"
          }],
          "ToPort": 2050,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 22,
          "IpRanges": [{
              "CidrIp": "202.56.60.0/23"
            },
            {
              "CidrIp": "202.74.165.25/32"
            },
            {
              "CidrIp": "203.161.82.69/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 21,
          "IpRanges": [{
              "CidrIp": "10.0.0.0/16"
            },
            {
              "CidrIp": "172.31.8.216/32"
            },
            {
              "CidrIp": "175.45.85.131/32"
            },
            {
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            },
            {
              "CidrIp": "54.206.64.252/32"
            }
          ],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "HIF-SFTP",
      "VpcId": "vpc-f10b3f98",
      "OwnerId": "954911931766",
      "GroupId": "sg-4ffd1820"
    },
    {
      "IpPermissionsEgress": [{
        "PrefixListIds": [],
        "FromPort": 9630,
        "IpRanges": [{
          "CidrIp": "10.1.1.75/32"
        }],
        "ToPort": 9630,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "Description": "Lightspeed WebService at Timbecon Server",
      "IpPermissions": [],
      "GroupName": "Lightspeed WebService at Timbecon Server",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-56c30b31"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Provides RDP access to LIVE environment for offshore teams",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 3389,
        "IpRanges": [{
          "CidrIp": "192.168.0.0/24"
        }],
        "ToPort": 3389,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "LIVE-Offshore-RDP",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-5834db3d"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging admin servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-7e86961c"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 445,
          "IpRanges": [],
          "ToPort": 445,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-7e86961c"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-46869624"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-46869624"
          }]
        }
      ],
      "GroupName": "StagingAdminServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-60869602"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging file servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-7e86961c"
          }]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-65869607"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 20,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "74.81.214.197/32"
            },
            {
              "CidrIp": "74.81.223.249/32"
            }
          ],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 1024,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 1048,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 445,
          "IpRanges": [],
          "ToPort": 445,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            }
          ]
        }
      ],
      "GroupName": "StagingFileServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-65869607"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "default VPC security group",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [],
        "UserIdGroupPairs": [{
          "UserId": "954911931766",
          "GroupId": "sg-664f5c0a"
        }],
        "PrefixListIds": []
      }],
      "GroupName": "default",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-664f5c0a"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Visual Studio Remote Degugging",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "192.168.0.0/24"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "GroupName": "VS-Remote-Debugging",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-689acb0f"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging SMTP servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 25,
        "IpRanges": [],
        "ToPort": 25,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": [{
          "UserId": "954911931766",
          "GroupId": "sg-7e86961c"
        }]
      }],
      "GroupName": "StagingSmtpServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-72869610"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Live_MaxASP_Web",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [{
              "CidrIp": "10.0.0.0/16"
            },
            {
              "CidrIp": "192.168.0.0/24"
            }
          ],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 81,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
              "CidrIp": "10.0.1.70/32"
            },
            {
              "CidrIp": "192.168.0.0/24"
            }
          ],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 21,
          "IpRanges": [{
            "CidrIp": "66.29.198.127/32"
          }],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-ee5e3b8b"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": -1,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Live_MaxASP_Web",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-75a53810"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging database servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 7800,
          "IpRanges": [],
          "ToPort": 7801,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-77869615"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-7e86961c"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 8250,
          "IpRanges": [],
          "ToPort": 8250,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-77869615"
          }]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-65869607"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 9800,
          "IpRanges": [],
          "ToPort": 9800,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 8082,
          "IpRanges": [{
              "CidrIp": "10.0.10.0/24"
            },
            {
              "CidrIp": "10.0.12.0/24"
            },
            {
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 8082,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "StagingDatabaseServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-77869615"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging services servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "54.252.133.28/32"
            }
          ],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 25672,
          "IpRanges": [],
          "ToPort": 25672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-9e8595fc"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1080,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 1080,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 137,
          "IpRanges": [],
          "ToPort": 138,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-65869607"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 4369,
          "IpRanges": [],
          "ToPort": 4369,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1024,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 1048,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 139,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-65869607"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 25627,
          "IpRanges": [],
          "ToPort": 25627,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-60869602"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 445,
          "IpRanges": [],
          "ToPort": 445,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-65869607"
          }]
        }
      ],
      "GroupName": "StagingServicesServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-7e86961c"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows comunication between servers for the rabbit mq cluster",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 4396,
          "IpRanges": [],
          "ToPort": 4396,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-810dcae4"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-810dcae4"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 25672,
          "IpRanges": [],
          "ToPort": 25672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-810dcae4"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 5672,
          "IpRanges": [],
          "ToPort": 5672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-810dcae4"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 15672,
          "IpRanges": [],
          "ToPort": 15672,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-810dcae4"
          }]
        }
      ],
      "GroupName": "MintoxRabbitMQCluster",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-810dcae4"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "security group for the frontend lb",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 81,
          "IpRanges": [{
              "CidrIp": "52.62.122.11/32"
            },
            {
              "CidrIp": "52.62.162.183/32"
            }
          ],
          "ToPort": 81,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "LB-MintoxFrontendServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-864e5dea"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Rules for accessing our VPN server",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 4500,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 4500,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
              "CidrIp": "124.148.255.114/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 1701,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 1701,
          "IpProtocol": "udp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 22,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 1723,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 1723,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "51",
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        },
        {
          "IpProtocol": "50",
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        },
        {
          "IpProtocol": "47",
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "UserIdGroupPairs": [],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 500,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 500,
          "IpProtocol": "udp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "VPN Management",
      "VpcId": "vpc-decb8dba",
      "OwnerId": "954911931766",
      "GroupId": "sg-8e7d99e8"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "ALLOW ALL TRAFFIC FOR TESTING",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 81,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 81,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "LIVE-HIF-PROXY-SERVER",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-92d590f7"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows remote debugginh to offshore team",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 500,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 500,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 135,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 4015,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 4015,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 4500,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 4500,
          "IpProtocol": "udp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Staging-Offshore-RemoteDebug",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-9caebcfe"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Contains the staging web servers",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8080,
          "IpRanges": [],
          "ToPort": 8080,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-42869620"
          }]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-60869602"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-9e8595fc"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-42869620"
          }]
        }
      ],
      "GroupName": "StagingFrontendServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-9e8595fc"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "default VPC security group",
      "IpPermissions": [{
        "IpProtocol": "-1",
        "IpRanges": [],
        "UserIdGroupPairs": [{
          "UserId": "954911931766",
          "GroupId": "sg-a7d968c0"
        }],
        "PrefixListIds": []
      }],
      "GroupName": "default",
      "VpcId": "vpc-90d874f4",
      "OwnerId": "954911931766",
      "GroupId": "sg-a7d968c0"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allow access for Windows Remote Management from the clue office",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 5985,
        "IpRanges": [{
            "CidrIp": "172.16.0.0/24"
          },
          {
            "CidrIp": "192.168.0.0/24"
          }
        ],
        "ToPort": 5985,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "Staging-RemoteManagement",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-aefeedcc"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Defines access to the quickbooks server",
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 3389,
        "IpRanges": [{
            "CidrIp": "103.39.15.14/32"
          },
          {
            "CidrIp": "106.68.192.35/32"
          },
          {
            "CidrIp": "124.148.231.244/32"
          },
          {
            "CidrIp": "13.59.97.85/32"
          },
          {
            "CidrIp": "203.142.73.58/32"
          },
          {
            "CidrIp": "203.59.97.85/32"
          },
          {
            "CidrIp": "58.7.103.10/32"
          }
        ],
        "ToPort": 3389,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "Clue Design Quickbooks",
      "VpcId": "vpc-f10b3f98",
      "OwnerId": "954911931766",
      "GroupId": "sg-c900f6ae"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "TESTMintoxDatabaseServers",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-ee688f81"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-ee688f81"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-e44f5c88"
            }
          ]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-414fa82e"
          }],
          "PrefixListIds": []
        }
      ],
      "GroupName": "TESTMintoxDatabaseServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-cb41a6a4"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allow powershell access to live servers",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
              "CidrIp": "10.0.12.0/24"
            },
            {
              "CidrIp": "172.16.0.0/24"
            },
            {
              "CidrIp": "192.168.0.0/24"
            }
          ],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
              "CidrIp": "10.0.12.0/24"
            },
            {
              "CidrIp": "172.16.0.0/24"
            }
          ],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 5985,
          "IpRanges": [{
              "CidrIp": "10.0.12.0/24"
            },
            {
              "CidrIp": "172.16.0.0/24"
            },
            {
              "CidrIp": "192.168.0.0/24"
            }
          ],
          "ToPort": 5985,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "Live-RemoteManagement",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-cf0849aa"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Mintox Admin Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-e44f5c88"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 8,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": -1,
          "IpProtocol": "icmp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "MintoxAdminServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-e44f5c88"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "TESTLB",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-414fa82e"
          }],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 135,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "TESTLB",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-e7688f88"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Mintox SMTP Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
              "CidrIp": "0.0.0.0/0"
            },
            {
              "CidrIp": "10.0.2.243/32"
            }
          ],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 1984,
          "IpRanges": [],
          "ToPort": 1984,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-7e86961c"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 123,
          "IpRanges": [],
          "ToPort": 123,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
              "CidrIp": "0.0.0.0/0"
            },
            {
              "CidrIp": "10.0.2.243/32"
            }
          ],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-7e86961c"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-864e5dea"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
              "CidrIp": "110.143.200.94/32"
            },
            {
              "CidrIp": "54.252.133.28/32"
            }
          ],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
              "CidrIp": "103.22.186.137/32"
            },
            {
              "CidrIp": "110.143.200.94/32"
            },
            {
              "CidrIp": "14.203.100.78/32"
            }
          ],
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-7e86961c"
            }
          ],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 22,
          "IpRanges": [],
          "ToPort": 22,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-77869615"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 21,
          "IpRanges": [],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 25,
          "IpRanges": [{
              "CidrIp": "10.0.1.0/24"
            },
            {
              "CidrIp": "103.1.185.241/32"
            },
            {
              "CidrIp": "13.55.17.130/32"
            },
            {
              "CidrIp": "178.79.181.14/32"
            },
            {
              "CidrIp": "184.72.226.23/32"
            },
            {
              "CidrIp": "184.73.218.144/32"
            },
            {
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.59.97.85/32"
            },
            {
              "CidrIp": "66.246.75.38/32"
            },
            {
              "CidrIp": "69.164.195.159/32"
            },
            {
              "CidrIp": "74.207.230.51/32"
            },
            {
              "CidrIp": "74.82.3.54/32"
            },
            {
              "CidrIp": "78.47.11.130/32"
            }
          ],
          "ToPort": 25,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-fa736096"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-354f5c59"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-77869615"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-75a53810"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 20,
          "IpRanges": [],
          "ToPort": 20,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        }
      ],
      "GroupName": "MintoxSmtpServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-e773608b"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Allows access to staging servers via RDP",
      "Tags": [{
        "Value": "Staging",
        "Key": "Environment"
      }],
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 3389,
        "IpRanges": [{
            "CidrIp": "172.16.0.0/24"
          },
          {
            "CidrIp": "192.168.0.0/24"
          }
        ],
        "ToPort": 3389,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "Staging-RDP",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-ec2bd289"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Live_MaxASP_Services",
      "IpPermissions": [{
        "PrefixListIds": [],
        "FromPort": 3389,
        "IpRanges": [{
          "CidrIp": "192.168.0.0/24"
        }],
        "ToPort": 3389,
        "IpProtocol": "tcp",
        "UserIdGroupPairs": []
      }],
      "GroupName": "Live_MaxASP_Services",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-ee5e3b8b"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "TESTFrontendWebServer",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-e7688f88"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-414fa82e"
            }
          ]
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-414fa82e"
          }],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [],
          "ToPort": 82,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-e7688f88"
          }]
        }
      ],
      "GroupName": "TESTFrontendWebServer",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-ee688f81"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "OnTime2013",
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 80,
          "IpRanges": [{
              "CidrIp": "0.0.0.0/0"
            },
            {
              "CidrIp": "124.186.86.241/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 80,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 1433,
          "IpRanges": [{
            "CidrIp": "203.59.97.85/32"
          }],
          "ToPort": 1433,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-f61dad91"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
              "CidrIp": "124.186.86.241/32"
            },
            {
              "CidrIp": "125.209.163.95/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 443,
          "IpRanges": [{
            "CidrIp": "0.0.0.0/0"
          }],
          "ToPort": 443,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        }
      ],
      "GroupName": "OnTime2013",
      "VpcId": "vpc-90d874f4",
      "OwnerId": "954911931766",
      "GroupId": "sg-f61dad91"
    },
    {
      "IpPermissionsEgress": [{
        "IpProtocol": "-1",
        "IpRanges": [{
          "CidrIp": "0.0.0.0/0"
        }],
        "UserIdGroupPairs": [],
        "PrefixListIds": []
      }],
      "Description": "Mintox Services Servers",
      "Tags": [{
        "Value": "Live",
        "Key": "Environment"
      }],
      "IpPermissions": [{
          "PrefixListIds": [],
          "FromPort": 0,
          "IpRanges": [{
              "CidrIp": "110.143.200.94/32"
            },
            {
              "CidrIp": "120.136.42.188/32"
            },
            {
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "54.252.133.28/32"
            }
          ],
          "ToPort": 65535,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "IpProtocol": "-1",
          "IpRanges": [{
              "CidrIp": "10.226.40.100/32"
            },
            {
              "CidrIp": "103.22.186.137/32"
            },
            {
              "CidrIp": "110.143.200.94/32"
            },
            {
              "CidrIp": "120.136.42.188/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-e773608b"
          }],
          "PrefixListIds": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 21,
          "IpRanges": [{
            "CidrIp": "192.168.0.0/24"
          }],
          "ToPort": 21,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 137,
          "IpRanges": [],
          "ToPort": 138,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-034f5c6f"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 135,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "udp",
          "UserIdGroupPairs": [{
            "UserId": "954911931766",
            "GroupId": "sg-374f5c5b"
          }]
        },
        {
          "PrefixListIds": [],
          "FromPort": 139,
          "IpRanges": [],
          "ToPort": 139,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            }
          ]
        },
        {
          "PrefixListIds": [],
          "FromPort": 3389,
          "IpRanges": [{
              "CidrIp": "192.168.0.0/24"
            },
            {
              "CidrIp": "203.122.33.242/32"
            },
            {
              "CidrIp": "203.59.97.85/32"
            }
          ],
          "ToPort": 3389,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": []
        },
        {
          "PrefixListIds": [],
          "FromPort": 445,
          "IpRanges": [],
          "ToPort": 445,
          "IpProtocol": "tcp",
          "UserIdGroupPairs": [{
              "UserId": "954911931766",
              "GroupId": "sg-374f5c5b"
            },
            {
              "UserId": "954911931766",
              "GroupId": "sg-034f5c6f"
            }
          ]
        }
      ],
      "GroupName": "MintoxServicesServers",
      "VpcId": "vpc-46b25e2f",
      "OwnerId": "954911931766",
      "GroupId": "sg-fa736096"
    }
  ]
};

const getGroupNames = () => {
  let names = data.SecurityGroups.map(sg => {
    return sg.GroupName;
  });
  names.forEach(function (n) {
    console.log(n + ',');
  }, this);
};

getGroupNames();